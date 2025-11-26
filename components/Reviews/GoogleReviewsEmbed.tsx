const GoogleReviewsEmbed = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-600 h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8453776820243!2d72.88620721102959!3d21.237979180477968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0c7a886555%3A0x43880f7eb84f99c4!2sWaffle%20N%20Vibe!5e0!3m2!1sen!2sin!4v1762285984641!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleReviewsEmbed;
