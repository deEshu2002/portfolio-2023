
import Content from "./OffLoadValues";

export type RouteType = "one" | "two" | "three" | "four" | "five" | "six" | "seven" | "eight";

function HTML(name:RouteType):string{
    const values = Content[name];

 return `<div id="work">\
    <div id="background-image" class="hidden" style="background-image: url(${values.backgroundImage})">  </div>\
    \
    <div class="work-view-nav">\
      <a id="back" href="#">Back</a>\
      <a id="source" href="#">\
        <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\
          <path\
            d="M13.9991 2.04344C14.023 1.49167 13.5952 1.02493 13.0434 1.00094L4.05193 0.610009C3.50017 0.586019 3.03343 1.01386 3.00944 1.56563C2.98545 2.11739 3.41329 2.58413 3.96506 2.60812L11.9575 2.95562L11.61 10.9481C11.586 11.4998 12.0139 11.9666 12.5656 11.9906C13.1174 12.0146 13.5841 11.5867 13.6081 11.0349L13.9991 2.04344ZM1.67572 13.7372L13.6757 2.73715L12.3243 1.26285L0.324275 12.2628L1.67572 13.7372Z"\
            fill="black" />\
        </svg>\
      </a>\
    </div>\
    <div id="title">\
      <h1 class="heading hidden"><span>${values.titleHeading}</span></h1>\
      <h6>${values.titleSubHeading}</h6>\
    </div>\
\
    <section class="content-section">\
      <div id="overview">\
        <img class="overview-img hidden" src=${values.overViewImage}/>\
        <div class="description hidden">\
          <p><span class="hidden">${values.descriptionPara[0]}</span> <span class="hidden">${values.descriptionPara[1]}</span> <span class="hidden">${values.descriptionPara[2]}</span></p>\
          <p><span class="hidden">${values.descriptionPara[3]}</span></p>\
          <p><span class="hidden"> ${values.descriptionPara[4]}</span></p>\
          <p class="tools">\
            ${values.tools.map((tool) => {
                return `<code class="hidden">${tool}</code>`;
            }).join('')}
          </p>\
        </div>\
      </div>\
      ${values.productImage.map((img) => {
          return `<img class="product-img hidden" src=${img} />` 
      }).join('')}
     \
    </section>\
\
  </div>`
}

export default HTML;