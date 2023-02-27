
export default function createRoomId() {
    return (+new Date()).toString(16)
}