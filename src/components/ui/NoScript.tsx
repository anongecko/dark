export const NoScript = () => {
  return (
    <noscript>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background bg-opacity-90">
        <div className="max-w-md p-6 bg-primary rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-text mb-4">JavaScript is Required</h2>
          <p className="text-text mb-4">
            This website requires JavaScript to function properly. Please enable JavaScript in your browser settings to continue.
          </p>
          <a
            href="https://www.enable-javascript.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90"
          >
            How to enable JavaScript
          </a>
        </div>
      </div>
    </noscript>
  );
};
