const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );
  const accordionItemHeader = document.querySelector(".accordion-item-header");
  const showOnLoad = document.querySelectorAll(".show-on-load");
  const accordionItemBody = document.querySelector(".accordion-item-body");
  const deleteBtn = document.querySelectorAll(".delete-btn");
  const accordionItem = document.querySelector(".accordion-item");
  const cardList = document.querySelector("#cards-list");
  const card = document.querySelectorAll(".card");
  const selectAllBtn = document.querySelector("#select-all-btn");
  
  const headers = accordionItemHeaders;
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const heightBody = body.scrollHeight;
      header.classList.toggle("active");
      if (header.classList.contains("active")) {
        body.style.maxHeight = `${heightBody}px`;
      } else {
        body.style.maxHeight = 0;
      }
    });
  });
  
  headers.forEach((header) => {
    window.addEventListener("load", () => {
      const body = header.nextElementSibling;
      const heightBody = body.scrollHeight;
      header.classList.contains("show-on-load");
      if (header.classList.contains("show-on-load")) {
        header.classList.toggle("active");
        body.style.maxHeight = `${heightBody}px`;
      } else {
        body.style.maxHeight = 0;
      }
    });
  });
  
  headers.forEach((header) => {
    selectAllBtn.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const heightBody = body.scrollHeight;
      const heightHeader = header.scrollHeight;
      header.classList.toggle("accordion-item-body");
      if (header.classList.contains("accordion-item-body")) {
        body.style.maxHeight = `${heightBody}px`;
        header.style.maxHeight = `${heightHeader}px`;
        selectAllBtn.innerText = "Ascunde tot";
        header.classList.add("active");
      } else {
        body.style.maxHeight = 0;
        selectAllBtn.innerText = "Vezi tot";
        header.classList.remove("active");
      }
    });
  });