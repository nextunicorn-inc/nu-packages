# nu-icons ver. 0.1.1

> 넥스트유니콘 아이콘 패키지

기본적으로 파스칼 케이스로 정의되었습니다.

```
- 예) IconAlert
```

## 아이콘 설명

> default : 20

## Notice

- 기존 아이콘 사용시, size props 에 아무 값도 넣지 않는다면 자체 default size를 반환하였습니다.
- 해당 동작은 개발자가 예상하기 힘드므로 0.1.xx버전 이후부터는 아이콘 size가 20이 없을 경우 타입에러를 반환합니다.
- 가능한 사용하고자 하는 아이콘의 사이즈를 프롭에 주입해주세요.

## 1.Brand New Icons

> 이전버전에는 없었던 새로운 아이콘

### 색상 변경 가능

- IconAlertFilled.tsx / size: 20
- IconArrNextCircle.tsx / size: 24
- IconChatOff.tsx / size: 24
- IconCloseFilled.tsx / size: 16, 20, 24
- IconCompany.tsx / size: 20, 24
- IconCongratuation.tsx / size: 20
- IconFile.tsx / size: 24, 32, 40
- IconFileEnlarger.tsx / size: 24
- IconFolderDefaultFill.tsx / size: 24
- IconFolderFilled.tsx / size: 32
- IconHeartCircle.tsx / size: 24
- IconInsight.tsx / size: 24, 24
- IconLink.tsx / size: 20
- IconPartnership.tsx / size: 24, 24
- IconReplay.tsx / size: 16, 20, 24
- IconSend.tsx / size: 24
- IconSendFilled.tsx / size: 24
- IconShareFilled.tsx / size: 32
- IconSpread.tsx / size: 16, 20, 24
- IconSupport.tsx / size: 24
- IconView.tsx / size: 24

### 색상 변경 불가능

- IconChatOn.tsx / size: 24
- IconNotificationAlert.tsx / size: 24

## 2. 기존유지되는 것

### 색상 변경 가능

- IconAlert.tsx / size: 24
- IconAngels.tsx / size: 24
- IconAppstore.tsx / size: 24
- IconArrNext.tsx / size: 20, 24
- IconArrPrev.tsx / size: 20, 24
- IconAttachment.tsx / size: 20, 24
- IconAward.tsx / size: 24
- IconBlog.tsx / size: 32
- IconBookmarkCircle.tsx / size: 24
- IconBookmarkDeselected.tsx / size: 20, 24
- IconBookmarkSelected.tsx / size: 20, 24
- IconCalendar.tsx / size: 20, 24
- IconChart.tsx / size: 20, 24
- IconCheckDeselected.tsx / size: 16, 20, 24
- IconCheckSelected.tsx / size: 16, 20, 24
- IconClock.tsx / size: 20
- IconClose.tsx / size: 16, 20, 24, 40
- IconCoin.tsx / size: 24
- IconCollapse.tsx / size: 20, 24
- IconDash.tsx / size: 16
- IconDown.tsx / size: 16
- IconDownload.tsx / size: 20, 24
- IconEdit.tsx / size: 20, 24
- IconEvent.tsx / size: 24
- IconEye.tsx / size: 20
- IconFacebook.tsx / size: 32
- IconFast.tsx / size: 16, 20, 32
- IconFileImg.tsx / size: 32, 40
- IconFileIr.tsx / size: 32, 40
- IconFileView.tsx / size: 24
- IconFilter.tsx / size: 24
- IconFlowDown.tsx / size: 16
- IconFlowUp.tsx / size: 16
- IconFold.tsx / size: 20, 24
- IconFolder.tsx / size: 20, 24
- IconFolderOpen.tsx / size: 20, 24
- IconGhost.tsx / size: 24
- IconGooglestore.tsx / size: 24
- IconGraph.tsx / size: 20
- IconHeartDeselected.tsx / size: 20, 24
- IconHeartSelected.tsx / size: 20, 24
- IconHome.tsx / size: 24
- IconInfo.tsx / size: 20
- IconInstagram.tsx / size: 32
- IconJob.tsx / size: 20
- IconJudge.tsx / size: 24
- IconKakao.tsx / size: 32
- IconLarger.tsx / size: 24
- IconLock.tsx / size: 20
- IconLogout.tsx / size: 20, 24
- IconMail.tsx / size: 20
- IconManagerAdd.tsx / size: 20, 24
- IconMegaphone.tsx / size: 20, 24
- IconMenu.tsx / size: 24
- IconMyInvestor.tsx / size: 24
- IconMyTicket.tsx / size: 24
- IconNotification.tsx / size: 20, 24
- IconPayment.tsx / size: 24
- IconPlus.tsx / size: 20
- IconPost.tsx / size: 32
- IconQnA.tsx / size: 24
- IconQuestion.tsx / size: 20
- IconRank.tsx / size: 20
- IconReceived.tsx / size: 24
- IconRefresh.tsx / size: 16
- IconRequested.tsx / size: 24
- IconSearch.tsx / size: 20, 24, 32, 40
- IconService.tsx / size: 24
- IconSetting.tsx / size: 24
- IconShare.tsx / size: 20, 24
- IconShowcase.tsx / size: 24
- IconSite.tsx / size: 24
- IconSort.tsx / size: 16
- IconTrash.tsx / size: 20, 24
- IconTwitter.tsx / size: 32
- IconUnicorn.tsx / size: 24
- IconUnicorncard.tsx / size: 24
- IconUnicornlive.tsx / size: 24
- IconUnlock.tsx / size: 20
- IconUp.tsx / size: 16
- IconUrl.tsx / size: 32
- IconUser.tsx / size: 20
- IconViewCircle.tsx / size: 24
- IconVote.tsx / size: 20, 24
- IconWaiting.tsx / size: 20
- IconYoutube.tsx / size: 32

### 색상 변경 불가능

- IconAsc.tsx / size: 16
- IconDesc.tsx / size: 16
- IconNuUser.tsx / size: 24

## 3.대소문자 변경된 사항
> git 대소문자 인식 문제로 인해 반영되지 않음. Before 이름으로 검색하면 나옵니다.

<div style="display: flex;  justify-content: space-around">
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
    <h3>Before</h3>
    <span>IconAppStore.tsx</span>
    <span>IconASC.tsx</span>
    <span>IconFileIR.tsx</span>
    <span>IconUnicornCard.tsx</span>
    <span>IconUnicornLive.tsx</span>      
  </div>
  <div style="display: flex; align-items: center" >-></div>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
    <h3>Now</h3>
    <span>IconAppstore.tsx</span>
    <span>IconAsc.tsx</span>
    <span>IconFileIr.tsx</span>
    <span>IconUnicorncard.tsx</span>
    <span>IconUnicornlive.tsx</span>      
  </div>
</div>

## 4. 피그마 아이콘 리스트에 없는 자원

> 곧 지워질 수 도 있는 아이콘

<div style="display: flex; flex-direction: column; justify-content: start; align-items: start">
  <span style="color: coral">  - IconChat.tsx</span>
  <span style="color: coral">  - IconCircleArrNext.tsx</span>
  <span style="color: coral">  - IconCompanyProfile.tsx</span>
  <span style="color: coral">  - IconCongratulation.tsx</span>
  <span style="color: coral">  - IconFileDoc.tsx</span>
  <span style="color: coral">  - IconFileNu.tsx</span>
  <span style="color: coral">  - IconFolderDefault.tsx</span>
  <span style="color: coral">  - IconFolderFill.tsx</span>
  <span style="color: coral">  - IconGraphicDoBookmark.tsx</span>
  <span style="color: coral">  - IconGraphicNoResult.tsx</span>
  <span style="color: coral">  - IconIntroduce.tsx</span>
  <span style="color: coral">  - IconNew.tsx</span>
  <span style="color: coral">  - IconNews.tsx</span>
  <span style="color: coral">  - IconNewsColor.tsx</span>
  <span style="color: coral">  - IconNextunicorn.tsx</span>
  <span style="color: coral">  - IconOnlineIR.tsx</span>
  <span style="color: coral">  - IconSendDisabled.tsx</span>
  <span style="color: coral">  - IconSendEnabled.tsx</span>
  <span style="color: coral">  - IconSpreadNavigation.tsx</span>
  <span style="color: coral">  - IconUnicornBox.tsx</span>
  <span style="color: coral">  - IconWritePR.tsx</span>
</div>
<br/>
<br/>
