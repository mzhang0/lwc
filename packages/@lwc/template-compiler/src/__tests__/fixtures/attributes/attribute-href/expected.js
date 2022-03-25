import { registerTemplate, renderApi } from "lwc";
const { t: api_text, so: api_set_owner, h: api_element } = renderApi;
const $hoisted1 = api_text("Yasaka Taxi");
const stc0 = {
  attrs: {
    href: "#yasaka-taxi",
  },
  key: 0,
};
const stc1 = {
  key: 1,
};
const stc2 = {
  attrs: {
    href: "#eneos-gas",
  },
  key: 2,
};
const stc3 = {
  attrs: {
    href: "#kawaramachi",
  },
  key: 3,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  return [
    api_element("a", stc0, [api_set_owner($hoisted1)]),
    api_element("map", stc1, [
      api_element("area", stc2),
      api_element("area", stc3),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
