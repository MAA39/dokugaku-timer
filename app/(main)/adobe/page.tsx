export default function Page() {
  return (
    <div className="container">
      <div>adobe</div>
      {/* <iframe
        src="https://udify.app/chatbot/nLuH0lKmjBZDckCE"
        style="width: 100%; height: 100%; min-height: 700px"
        frameborder="0"
        allow="microphone"></iframe> */}
      {/* TailwindCSSに合うように上記を変更
       */}
      <iframe
        src="https://udify.app/chatbot/nLuH0lKmjBZDckCE"
        style={{ width: "100%", height: "100%", minHeight: "700px" }}
        frameBorder="0"
        allow="microphone"></iframe>
    </div>
  );
}
