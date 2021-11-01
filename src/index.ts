const observer = ({ eles = [], ...options }) => {
  let callBack = (entries: any) => {
    entries.forEach((it: any) => {
      if (it.isIntersecting) {
        const dom = it.target;
        if (dom.getAttribute("data-status") == "hidden") {
          dom.setAttribute("data-status", "visible");
        }
      }
    });
  };

  let Window: any = globalThis;

  let io = new Window.IntersectionObserver(callBack, options);

  eles.forEach(it => io.observe(it));
};

export default observer;
