let loading = false;
let currentTotalShowing = 0;

const initialRender = (content, showPerItem, totalItem) => {
  const itemsToHide = [...content]?.slice(showPerItem, totalItem);

  itemsToHide?.forEach((item) => {
    item.classList.add("hidden");
  });

  currentTotalShowing = content.length - itemsToHide.length;
};

const showMore = (content, currentShow, totalToShow) => {
  const itemsToShow = [...content]?.slice(currentShow, currentShow + totalToShow);

  itemsToShow?.forEach((item) => {
    item.classList.remove("hidden");
  });
};

export const infiniteScroll = (selector, options, callback = () => {}) => {
  const { showPerItem, totalItem } = options;
  const container = document.querySelector(selector);

  if (currentTotalShowing === 0 && container.children.length > 0) {
    initialRender(container.children, showPerItem, totalItem);
  }

  const addLoader = () => {
    const loader = document.createElement("div");
    loader.className = "infinite-scroll-loader";
    container.append(loader);
  };

  const removeLoader = () => {
    const loader = container?.querySelector(".infinite-scroll-loader");
    loader?.remove();
  };

  if (container) {
    window?.addEventListener("scroll", (e) => {
      const currentScroll = window.scrollY + window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollHeight - currentScroll <= 0 && currentTotalShowing < totalItem) {
        if (!loading && options) {
          addLoader();

          setTimeout(() => {
            if (currentTotalShowing + showPerItem < totalItem) {
              showMore(container.children, currentTotalShowing, showPerItem);
              currentTotalShowing += showPerItem;
            } else if (currentTotalShowing + showPerItem > totalItem && currentTotalShowing < totalItem) {
              showMore(container.children, currentTotalShowing, totalItem - currentTotalShowing);
              currentTotalShowing += totalItem - currentTotalShowing;
            }

            callback && callback(currentTotalShowing, totalItem);
          }, 1000);

          loading = true;

          setTimeout(() => {
            loading = false;
            removeLoader();
          }, 1000);
        }
      }
    });
  }
};
