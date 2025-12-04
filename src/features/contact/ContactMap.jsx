function ContactMap() {
  return (
    <section className="mb-16">
      <div className="rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
        <iframe
          title="Office location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24304.84299293751!2d28.9971503!3d41.0429675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf3c5b4c2f9d%3A0x6f5a4f303e9ab14b!2sIstanbul!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default ContactMap;





