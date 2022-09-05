const fs = require('fs');
const path = require('path')
// const IconFileNames = fs.readdirSync(`${__dirname}/../../src/icons`, 'utf-8');

const exportedSvgsPath = `${__dirname}/../../exportedSvgs`

const isDirectory = (fullPath) => {
    return fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()
}

const isFile = (fullPath) => {
    if (isDirectory(fullPath)) {
        return false
    }
    return fs.existsSync(fullPath) && fs.lstatSync(fullPath).isFile()
}

/**
 * 확장자를 제거한 파일의 이름 구하는 함수
 * */
const getFileName = (fullPath) => {
    if (!isFile(fullPath)) {
        throw new Error('파일이 아니면 확장자 제거로직이 필요 없지롱')
    }
    const fileName = path.basename(fullPath)
    const fileNameLis = fileName.split('.')
    fileNameLis.pop()
    // a.b.svg 인 경우를 고려
    return fileNameLis.join('.')
}
/**
 * 파일의 확장자를 구하는 함수
 * */
const getFileExtension = (fullPath) => {
    if (!isFile(fullPath)) {
        throw new Error('파일이 아니면 확장자를 모르지롱')
    }
    const fileName = path.basename(fullPath)
    const fileNameLis = fileName.split('.')

    // 확장자는 마지막이니까 바로 반환하기
    return fileNameLis[fileNameLis.length - 1]
}
/**
 * Rectangle 의 이름을 가지고 있는 아이콘의 경우, 각 아이콘들의 빈공간을 나타내기 위한 요소이므로 빼야합니다.
 *
 * filter를 통해 제거하고 싶은 조건들이 있음.
 *
 * 실행해야하는 것은 false를 반환해야하기 때문에, 의도적으로 한국어 어순에 따라 !(condition1 && condition2)보다는 if return문을 사용
 * */
const shouldExecute = (fullPath) => {
    if (isFile(fullPath) && isSvgFile(fullPath) && getFileName(fullPath).includes('Rectangle')) {
        return false
    }
    return true
}


const isSvgFile = (fullPath) => {
    return isFile(fullPath) && getFileExtension(fullPath) === 'svg'
}


const getPathFromSrc = (fullPath) => {
    const pathFromSrc = fullPath.split(`${exportedSvgsPath}/`)
    console.log(pathFromSrc)
    return pathFromSrc[1]
}

/**
 * 띄어쓰기를 기준으로 파스칼케이스로 만들어주는 로직
 * */
function toPascalCase(string) {
    return `${string}`
        .toLowerCase()
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(new RegExp(/\s+(.)(\w*)/, 'g'), ($1, $2, $3) => `${$2.toUpperCase() + $3}`)
        .replace(new RegExp(/\w/), s => s.toUpperCase());
}

/**
 * 맨앞자리가 action, social, navigation 인가 체크
 * */
const hasPrefixedSource = (aPathFromSrc) => {
    const [first] = aPathFromSrc.split('/')
    return ['action', 'social', 'navigation'].includes(first)
}
const calculatePrefixedSourceKeyAndSize = (aPathFormSrc) => {
    const lis = aPathFormSrc.split('/')
    // 파일이름을 추출한다.(unlock.svg) 해당 파일이름은 숫자일 수 없다.
    // 현재는 문제없는로직이지만 추후에는 문제가 생길 수 있는 로직 (ex unlock.checked.svg)
    const [fileName] = [...lis].pop().split('.')
    const size = lis.find(aPath => ['16', '20', '24', '32', '40'].includes(aPath))
    // ex action/20/bookmark/selected.svg 일 경우, [bookmark] 가 restNames 다.
    const restNames = lis.slice(2, -1)
    return {
        key: restNames.concat(fileName).join('/'), size,
    }
}

const calculateNumberFileKeyAndSize = (aPathFormSrc) => {
    const lis = aPathFormSrc.split('/')
    // 파일이름이 사이즈다.
    const [size] = [...lis].pop().split('.')
    // ex arrNext/circle/24.svg 일 경우, [arrNext, circle] 가 restNames 다.
    const restNames = lis.slice(0, lis.length - 1)
    return {
        key: restNames.join('/'), size,
    }
}

const isNumberFileName = (fullPath) => {
    const filename = getFileName(fullPath)
    return Number.isInteger(Number(filename)) && ['16', '20', '24', '32', '40'].includes(filename)
}


const fileMap = new Map()
const appendFileMap = ({key, size, fullPath, fileMap}) => {
    if (fileMap.has(key)) {
        const res = fileMap.get(key)
        res.push({key, size, fullPath})
        fileMap.set(key, res)
    } else {
        fileMap.set(key, [{key, size, fullPath}])
    }
}

const createFlattenSvgFilesFrom = (aPath) => {
    // base case
    if (isSvgFile(aPath)) {
        const pathFromSrc = getPathFromSrc(aPath)
        /** 맨앞자리가 action, social, navigation 이면서, 파일이 숫자면 throw error */
        if (isNumberFileName(aPath) && hasPrefixedSource(pathFromSrc)) {
            throw new Error('파일이름이 사이즈이면서 접두어 폴더로 시작하는 파일은 없어야한다.')
        }
        /** 만약 action, social, navigation 이 첫글자면(=== 디렉토리가 숫자인 경우가 있다면) */
        if (hasPrefixedSource(pathFromSrc)) {
            /**
             *    (맨 앞자리 단어를 빼고) 숫자 뒤의 경로(파일명 포함)를 키값으로 한다.
             *    키를 기준으로, 사이즈별 파일경로, 사이즈, 키를 저장한다.
             * */
            const {key, size} = calculatePrefixedSourceKeyAndSize(pathFromSrc)
            appendFileMap({key, size, fullPath: aPath, fileMap})
            return;
        }
        /** 만약 파일명이 숫자(16,20,24,32,40)라면 */
        if (isNumberFileName(aPath)) {
            /**
             *    파일 앞쪽 디렉토리를 키로 한다.
             *    키를 기준으로, 사이즈별 파일경로, 사이즈, 키를 저장한다.(위와 같음)
             * */
            const {key, size} = calculateNumberFileKeyAndSize(pathFromSrc)
            appendFileMap({key, size, fullPath: aPath, fileMap})
            return;
        }
        /** 그 외의 경우가 있다면 일단 throw error */
        throw new Error('파일이름이 사이즈가 아니면서 접두어 폴더로 시작하지 않는는 파일은 없어야한다.')
    }
    if (isDirectory(aPath)) {

        fs.readdirSync(aPath, "utf-8")
            .map(subDir => `${aPath}/${subDir}`)
            .filter(shouldExecute)
            .forEach(createFlattenSvgFilesFrom)
    }

}

createFlattenSvgFilesFrom(exportedSvgsPath)
fs.writeFileSync('./iconMeta.json', JSON.stringify(Object.fromEntries(fileMap)))
fs.writeFileSync('./fileNames.json', JSON.stringify([...fileMap.keys()].map(path => toPascalCase(path.replaceAll('/', ' '))).sort()))
