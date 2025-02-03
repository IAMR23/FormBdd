/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderScript, f as createAstro, j as renderHead, k as renderSlot, l as renderComponent } from '../chunks/astro/server_BGSexrSh.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center h-screen" data-astro-cid-346426y5> <form class="form bg-cafe-claro" method="POST" id="miFormulario" data-astro-cid-346426y5> <h1 class="text-2xl text-white p-5 uppercase font-bold" data-astro-cid-346426y5>
Confirmar Asistencia
</h1> <div class="field" data-astro-cid-346426y5> <input placeholder="Nombres y Apellidos" name="nombres" class="input-field" type="text" data-astro-cid-346426y5> </div> <div class="field" style="display: none;" data-astro-cid-346426y5> <input placeholder="Apellidos" name="apellidos" class="input-field" type="text" data-astro-cid-346426y5> </div> <!--     <select class="field" id="opasistencia" name="asistencia">
      <option value="" disabled selected>Confirmación</option>
      <option value="Sí, asistiré">Sí, asistiré</option>
      <option value="No podré asistir">No podré asistir</option>
    </select> --> <div class="flex flex-col space-y-2" data-astro-cid-346426y5> <label class="font-bold text-white" data-astro-cid-346426y5>Confirmación:</label> <label class="flex items-center space-x-2 text-gray-500" data-astro-cid-346426y5> <input type="radio" name="asistencia" value="Sí, asistiré" class="w-4 h-4" data-astro-cid-346426y5> <span data-astro-cid-346426y5>Sí, asistiré</span> </label> <label class="flex items-center space-x-2 text-gray-500" data-astro-cid-346426y5> <input type="radio" name="asistencia" value="No podré asistir" class="w-4 h-4" data-astro-cid-346426y5> <span data-astro-cid-346426y5>No podré asistir</span> </label> </div> <div class="field" data-astro-cid-346426y5> <input placeholder="¿Tienes alergia algún alimento?" name="alergia" class="input-field" type="text" data-astro-cid-346426y5> </div> <!--     <select class="field" id="opalergia" name="alergia">
      <option value="" disabled selected>Alergia</option>
      <option value="Sí">Si</option>
      <option value="No">No</option>
    </select>
 --> <button class="btn bg-cafe-oscuro font-bold" type="submit" data-astro-cid-346426y5>Enviar Respuesta</button> </form> </div>  ${renderScript($$result, "C:/Users/ismae/Downloads/pro/Form/dark-disk/src/components/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ismae/Downloads/pro/Form/dark-disk/src/components/Form.astro", undefined);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator" content="./Layout.astro"><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/ismae/Downloads/pro/Form/dark-disk/src/layouts/Layout.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Form", $$Form, {})} ` })}`;
}, "C:/Users/ismae/Downloads/pro/Form/dark-disk/src/pages/index.astro", undefined);

const $$file = "C:/Users/ismae/Downloads/pro/Form/dark-disk/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
