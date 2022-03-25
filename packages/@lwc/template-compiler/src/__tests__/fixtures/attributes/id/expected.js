import _xSubject from "x/subject";
import _xDescription from "x/description";
import _xTextarea from "x/textarea";
import { registerTemplate, renderApi } from "lwc";
const {
  gid: api_scoped_id,
  c: api_custom_element,
  t: api_text,
  so: api_set_owner,
  h: api_element,
  k: api_key,
  i: api_iterator,
  f: api_flatten,
} = renderApi;
const $hoisted1 = api_text("label text");
const $hoisted2 = api_text("description text");
function tmpl($api, $cmp, $slotset, $ctx) {
  return api_flatten([
    api_custom_element("x-subject", _xSubject, {
      props: {
        htmlFor: api_scoped_id("foo"),
      },
      key: 0,
    }),
    api_custom_element("x-description", _xDescription, {
      props: {
        id: api_scoped_id("bar"),
      },
      key: 1,
    }),
    api_custom_element("x-description", _xDescription, {
      props: {
        id: api_scoped_id("baz"),
      },
      key: 2,
    }),
    api_custom_element("x-textarea", _xTextarea, {
      props: {
        id: api_scoped_id("foo"),
        ariaDescribedBy: api_scoped_id("bar baz"),
      },
      key: 3,
    }),
    api_element(
      "label",
      {
        attrs: {
          for: api_scoped_id("boof"),
        },
        key: 4,
      },
      [api_set_owner($hoisted1)]
    ),
    api_element("input", {
      attrs: {
        id: api_scoped_id("boof"),
      },
      key: 5,
    }),
    api_iterator($cmp.things, function (thing) {
      return [
        api_element(
          "p",
          {
            attrs: {
              id: api_scoped_id(thing.id),
            },
            key: api_key(6, thing.key),
          },
          [api_set_owner($hoisted2)]
        ),
        api_element("input", {
          attrs: {
            "aria-describedby": api_scoped_id(thing.id),
          },
          key: api_key(7, thing.key),
        }),
      ];
    }),
  ]);
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
