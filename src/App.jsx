import './App.css'

function App() {
  return (
    <div
      style={{
        fontFamily: 'Segoe UI, Roboto, Arial, sans-serif',
        background: 'linear-gradient(135deg, #e0f7fa, #f1f8e9)',
        minHeight: '100vh',
        padding: '3rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          color: '#2c3e50',
          fontSize: '2.8rem',
          marginBottom: '2rem',
          fontWeight: '600',
        }}
      >
        📄 Iframe Sample App
      </h1>
      <div
        style={{
          backgroundColor: '#fff',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '95%',
          padding: '1rem',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            overflowX: 'auto',
            borderRadius: '8px',
          }}
        >
          <iframe
            src="https://ecbd-14-102-2-70.ngrok-free.app/dform/226564653562306263303739323022/short"
            width="100%"
            height="800px"
            style={{ border: 'none' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default App
