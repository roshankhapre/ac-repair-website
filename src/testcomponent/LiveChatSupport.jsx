import { useEffect } from "react";

const LiveChatSupport = () => {
  useEffect(() => {
    // Add the Smartsupp Live Chat script dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = '2541c34ffc200833d4d84968fe03daa02b9dd50b';
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';
        s.parentNode.insertBefore(c,s);
      })(document);
    `;
    document.body.appendChild(script);
  }, []);

  return null; // No UI needed, as chat loads automatically
};

export default LiveChatSupport;
