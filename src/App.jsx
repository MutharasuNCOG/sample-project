import './App.css'

 function App() {
      return (
        <div
          style={{
            fontFamily: 'Arial, sans-serif',
            background: 'linear-gradient(135deg, #e0f7fa, #f1f8e9)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header */}
          <header
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              padding: '0'
            }}
          >
            <div
              style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <h1
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1f2937'
                }}
              >
                ConnectSphere
              </h1>
              <nav>
                <ul
                  style={{
                    display: 'flex',
                    gap: '24px',
                    listStyle: 'none'
                  }}
                >
                  <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', ':hover': { color: '#3b82f6' } }}>Home</a></li>
                  <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', ':hover': { color: '#3b82f6' } }}>About</a></li>
                  <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', ':hover': { color: '#3b82f6' } }}>Services</a></li>
                  <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', ':hover': { color: '#3b82f6' } }}>Contact</a></li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Hero Section with Image */}
          <section
            style={{
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '32px 16px',
              textAlign: 'center'
            }}
          >
            {/* <img
              src="https://images.unsplash.com/photo-1516321310762-479e93c6e7d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Team collaboration"
              style={{
                width: '100%',
                height: '256px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '24px'
              }}
            /> */}
            <h1
              style={{
                fontSize: '30px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '16px'
              }}
            >
              Get in Touch with Us
            </h1>
            <p
              style={{
                color: '#4b5563',
                maxWidth: '640px',
                margin: '0 auto 32px'
              }}
            >
              Have questions or need assistance? Fill out the form below, and our team will respond promptly to help you with your needs.
            </p>
          </section>

          {/* Form Section */}
          <section
            style={{
              width: '100%',
              maxWidth: '768px',
              margin: '0 auto',
              padding: '0 16px 48px'
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: '100%',
                  overflowX: 'auto'
                }}
              >
                <iframe
                  src="https://app.dforms.earth/dform/223234653939613062313034353822/short"
                  width="100%"
                  height="800"
                  style={{ border: 'none' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer
            style={{
              width: '100%',
              backgroundColor: '#1f2937',
              color: '#ffffff',
              padding: '24px 0',
              marginTop: 'auto'
            }}
          >
            <div
              style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 16px',
                textAlign: 'center'
              }}
            >
              <p style={{ marginBottom: '8px' }}>© 2025 ConnectSphere. All rights reserved.</p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '16px'
                }}
              >
                <a href="#" style={{ color: '#ffffff', textDecoration: 'none', ':hover': { color: '#93c5fd' } }}>Privacy Policy</a>
                <a href="#" style={{ color: '#ffffff', textDecoration: 'none', ':hover': { color: '#93c5fd' } }}>Terms of Service</a>
                <a href="#" style={{ color: '#ffffff', textDecoration: 'none', ':hover': { color: '#93c5fd' } }}>Contact Us</a>
              </div>
            </div>
          </footer>
        </div>
      );
    }
export default App
