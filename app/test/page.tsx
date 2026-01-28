import Script from "next/script";

export default function Page() {
  return (
    <div>
      <Script
        src="http://localhost:3000/widget.js"
        data-id="394ae814-4b63-4520-ae50-48c0df4cefbe"
        strategy="afterInteractive"
      />
    </div>
  );
}
