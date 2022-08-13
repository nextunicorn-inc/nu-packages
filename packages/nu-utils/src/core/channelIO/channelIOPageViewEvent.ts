declare global {
  interface Window {
    ChannelIO: (...params: any[]) => any;
  }
}

// 채널톡은 SDK 부트 할 때 PageView 이벤트가 생성되어서 SPA 에서는 PageView 가 처음 한 번만 발생함
// SPA 환경에서 라우터 변경 시에도 PageView 를 발생시키려면, route 변경시 'PageView' 라는 event name 의 이벤트를 임의로 만들어 줘야 함
// 이벤트란?: https://developers.channel.io/docs/what-is-an-event
// https://developers.channel.io/docs/web-channel-io#track
export const channelIOPageViewEvent = () => {
  if (window.ChannelIO) {
    window.ChannelIO('track', 'PageView', {
      url: window.location.href,
    });
  }
};

export default channelIOPageViewEvent;
