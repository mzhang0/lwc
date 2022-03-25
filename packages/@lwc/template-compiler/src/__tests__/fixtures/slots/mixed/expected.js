import _xB from "x/b";
import { registerTemplate, renderApi } from "lwc";
const {
  h: api_element,
  t: api_text,
  so: api_set_owner,
  i: api_iterator,
  f: api_flatten,
  c: api_custom_element,
} = renderApi;
const $hoisted1 = api_text("x");
const stc0 = {
  key: 0,
};
const stc1 = {
  key: 1,
};
const stc2 = {
  key: 2,
};
const stc3 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  return [
    api_element("div", stc0, [
      api_custom_element(
        "x-b",
        _xB,
        stc1,
        api_flatten([
          $cmp.isLoading ? api_element("div", stc2) : null,
          $cmp.haveLoadedItems
            ? api_iterator($cmp.menuItems, function (item) {
                return api_set_owner($hoisted1);
              })
            : stc3,
        ])
      ),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
