import webstomp from 'webstomp-client';

export default class WebsocketListener {
    static register(url) {
        webstomp.client(url);
    }
}
