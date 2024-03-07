import { useOnlineStatus } from '../../hooks/useOnlineStatus'
function StatusBar(){
    const isOnline = useOnlineStatus()

    return(
        <>
            <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
        </>
    )
}

export default StatusBar;