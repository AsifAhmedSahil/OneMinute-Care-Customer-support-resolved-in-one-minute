import Script from "next/script";

export default function Page() {
  return (
    <div>
      <Script
        src="http://localhost:3000/widget.js"
        data-id="dac423c0-2efe-4346-be23-144ab0a5ef2f"
        strategy="afterInteractive"
      />
    </div>
  );
}
