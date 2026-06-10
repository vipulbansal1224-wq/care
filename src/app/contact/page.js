import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> &gt; Contact
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
            
            {/* Contact Details */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px', color: 'var(--secondary)' }}>
                Get In Touch With Us
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6 }}>
                If you have any questions or require support regarding our EOT Crane Spares or other material handling solutions, please reach out to us. We are here to help!
              </p>

              <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ fontSize: '24px' }}>📍</div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: 'var(--secondary)' }}>Our Address</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>Ludhiana, Punjab, India</p>
                </div>
              </div>

              <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ fontSize: '24px' }}>📞</div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: 'var(--secondary)' }}>Phone Number</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>+91 98765 43210</p>
                </div>
              </div>

              <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ fontSize: '24px' }}>✉️</div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: 'var(--secondary)' }}>Email Address</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>info@kdcranes.com</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div style={{ border: '1px solid var(--border-color)', padding: '10px', background: '#fff' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912903566!2d75.767104!3d30.900965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="KD Cranes Location"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
