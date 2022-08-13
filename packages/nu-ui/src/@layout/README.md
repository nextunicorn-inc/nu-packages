
# How to use LayoutSystem  
  
## Reference  
wiki: https://nxu.atlassian.net/wiki/spaces/HFZ/pages/85459270/Web+Design+Guide#Web-Grid  
  
## Basic LayoutSystem  
```javascript  
import React from 'react';  
import { LayoutSystem } from 'web/@designSystem/LayoutSystem/LayoutSystem';
import {  
  widthPC,  
  widthTablet,  
  widthMobile,  
} from 'web/@designSystem/LayoutSystem/LayoutSystem';
import styled from 'styled-components';  

const Wrapper = styled.div`  
	background-color: white;
`;  
  
const ItemWrapper = styled.div`  
	width: 100%;
`;
  
// --gutterWidth 값은 현재 디바이스에 맞춰 자동으로 바뀐다.  
const Item1 = styled.div`  
	width: ${widthPC(8)};  
	margin-right: var(--gutterWidth);    
 
	@media (max-width: ${TABLET_WIDTH}) {  
		width: ${widthTablet(3)};  
	}
 
	@media (max-width: ${MOBILE_WIDTH}) {  
		width: ${widthMobile(2)};  
	}
`;  
  
// <LayoutSystem> 내부에서 'width: 100%'를 주면 해당 디바이스(pc, tablet, mobile)에 따른 촤대 너비로 설정된다.  
const Item2 = styled.div`  
  width: ${widthPC(4)};  
 
  @media (max-width: ${TABLET_WIDTH}) {  
	width: 100%;
  }
`;  
  
const Component = styled.div`  
  width: 100%;
`;

// <LayoutSystem /> 컴포넌트 내부의 컴포넌트에서만 레이아웃 규칙이 따른다.  
// 규칙: https://nxu.atlassian.net/wiki/spaces/HFZ/pages/85459270/Web+Design+Guide#Web-Grid  
const Component = () => (  
	<Wrapper>
		<LayoutSystem>
			<ItemWrapper>
				<Item1 />
				<Item2 />
			</ItemWrapper>
		</LayoutSystem>
		<Component />
	</Wrapper>
);  
  
export default Component;  
```  
  
## LayoutSystem  응용

### 중첩 LayoutSystem
-  widthPC 등을 정의한 컴포넌트 내부에서 또 컬럼 너비를 정의할 때  

### Styled LayoutSystem
- StyledComponent를 통해 제작 가능

```javascript  
import React from 'react';  
import { LayoutSystem } from 'web/@designSystem/LayoutSystem/LayoutSystem';
import {  
  widthPC,  
  widthTablet,  
  widthMobile,  
} from 'web/@designSystem/LayoutSystem/LayoutSystem';
import styled from 'styled-components';  

const Wrapper = styled.div``;  

// styled 레이아웃 컴포넌트
const StyledLayoutSystem = styled(LayoutSystem)`
	@media (max-width: ${TABLET_WIDTH}) {  
		background-color: ${black};  
	}
`;

const Item1 = styled.div`  
	width: ${widthPC(8)}; 
	
	@media (max-width: ${TABLET_WIDTH}) {  
		width: ${widthTablet(3)};
	}
	
	@media (max-width: ${MOBILE_WIDTH}) {  
		width: ${widthMobile(2)};
	}
`; 
  
// 중첩 레이아웃 컴포넌트  
const NestedItem = styled.div`  
	// 부모 컴포넌트의 Column 개수를 두 번째 인자로 넘겨줘야한다.
	width: ${widthPC(2, 8)};
	
	@media (max-width: ${TABLET_WIDTH}) {  
		width: 100%;
	}
`;
  
const Component = () => (
	<Wrapper>
		<StyledLayoutSystem>
			<Item1>
				<NestedItem />
			</Item1>
		</StyledLayoutSystem>
	</Wrapper>
);  
  
export default Component;  
```  
  
## Grid System

```javascript
import React from 'react';
import { LayoutSystem } from 'web/@designSystem/LayoutSystem/LayoutSystem';
import {
  GridBox,
  GridItem,
} from 'web/@designSystem/LayoutSystem/Grid';
import styled from 'styled-src';

const Wrapper = styled.div``;

const MyGridBox = styled(GridBox)`
  margin-top: 10px;
`;

const MyGridItem = styled(GridItem)`  
  border: solid 1px #000;
`;

// Grid는 <LayoutSystem> 태그 내부에서만 사용 가능하다  
const Component = () => (
  <Wrapper>
    <LayoutSystem>
      <MyGridBox>
        <MyGridItem pc={6} tb={4} mb={3}/>
        <MyGridItem pc={6} tb={4} mb={3}/>
        <MyGridItem pc={6} tb={4} mb={3}/>
        <MyGridItem pc={6} tb={4} mb={3}/>
      </MyGridBox>
    </LayoutSystem>
  </Wrapper>
);

export default Component;  
```

## Grid System 너비가 100%가 아닌 경우
-  GridBox의 최대 컬럼 개수가 현재 디바이스 최대 개수(pc:12, tb:8, mb:6)보다 적을 경우, Column 너비를 새로 계산하기 위해 최대 컬럼 개수를 지정해 주어야 한다.

```javascript
import React from 'react';
import { LayoutSystem } from 'web/@designSystem/LayoutSystem/LayoutSystem';
import {
  GridBox,
  GridItem,
} from 'web/@designSystem/LayoutSystem/Grid';
import styled from 'styled-src';

const Wrapper = styled.div``;

const MyGridBox = styled(GridBox)`
  margin-top: 10px;
`;

const MyGridItem = styled(GridItem)`  
  border: solid 1px #000;
`;

// pc에서 그려지는 그리드박스의 컬럼 수가 일반적인 12개가 아니라 10개이기 때문에 따로 지정해준다.
const Component = () => (
  <Wrapper>
    <LayoutSystem>
      <MyGridBox pcMaxColumns={10}>
        <MyGridItem pc={6} tb={4} mb={3}/>
        <MyGridItem pc={6} tb={4} mb={3}/>
        <MyGridItem pc={6} tb={4} mb={3}/>
        <MyGridItem pc={6} tb={4} mb={3}/>
      </MyGridBox>
    </LayoutSystem>
  </Wrapper>
);

export default Component;  
```
