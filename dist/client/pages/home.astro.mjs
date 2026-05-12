import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.DdVmMhb3.js";
import { renderers } from "../renderers.mjs";
const $$Home = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Bossie Ride | Request rides 24/7", description: "Request a ride for now or later with Bossie Ride in Nairobi.", theme: "monster" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/home.astro" data-source-line-start="10" data-source-line-end="156" class="min-h-dvh bg-background text-foreground">

      <header data-source-file="src/pages/home.astro" data-source-line-start="12" data-source-line-end="68" class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div data-source-file="src/pages/home.astro" data-source-line-start="13" data-source-line-end="67" class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <!-- Logo -->
          <a data-source-file="src/pages/home.astro" data-source-line-start="15" data-source-line-end="18" href="/ride-request" class="flex items-center gap-2 font-semibold tracking-tight">
            <span data-source-file="src/pages/home.astro" data-source-line-start="16" data-source-line-end="16" class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">B</span>
            <span data-source-file="src/pages/home.astro" data-source-line-start="17" data-source-line-end="17" class="text-lg">Bossie Ride</span>
          </a>

          <!-- Desktop Nav -->
          <div data-source-file="src/pages/home.astro" data-source-line-start="21" data-source-line-end="36" class="hidden md:flex md:items-center md:gap-8">
            <nav data-source-file="src/pages/home.astro" data-source-line-start="22" data-source-line-end="27" class="flex items-center gap-6 text-sm font-medium">
              <a data-source-file="src/pages/home.astro" data-source-line-start="23" data-source-line-end="23" href="/ride-request" class="hover:text-primary transition-colors">Ride</a>
              <a data-source-file="src/pages/home.astro" data-source-line-start="24" data-source-line-end="24" href="#" class="hover:text-primary transition-colors">Drive</a>
              <a data-source-file="src/pages/home.astro" data-source-line-start="25" data-source-line-end="25" href="#" class="hover:text-primary transition-colors">Business</a>
              <a data-source-file="src/pages/home.astro" data-source-line-start="26" data-source-line-end="26" href="#" class="hover:text-primary transition-colors">Help</a>
            </nav>
            <div data-source-file="src/pages/home.astro" data-source-line-start="28" data-source-line-end="35" class="flex items-center gap-3 ml-8">
              <a data-source-file="src/pages/home.astro" data-source-line-start="29" data-source-line-end="31" href="/login" class="hidden sm:inline-flex rounded-full px-5 py-2 text-sm font-medium hover:bg-muted transition-colors">
                Sign in
              </a>
              <a data-source-file="src/pages/home.astro" data-source-line-start="32" data-source-line-end="34" href="/signup" class="inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                Sign up
              </a>
            </div>
          </div>

          <!-- Mobile Menu -->
          <div data-source-file="src/pages/home.astro" data-source-line-start="39" data-source-line-end="66" class="md:hidden">
            <input data-source-file="src/pages/home.astro" data-source-line-start="40" data-source-line-end="40" type="checkbox" id="mobile-menu" class="peer hidden">
            <label data-source-file="src/pages/home.astro" data-source-line-start="41" data-source-line-end="48" for="mobile-menu" class="cursor-pointer block">
              <div data-source-file="src/pages/home.astro" data-source-line-start="42" data-source-line-end="47" class="relative flex h-10 w-10 items-center justify-center">
                <div data-source-file="src/pages/home.astro" data-source-line-start="43" data-source-line-end="46" class="relative h-0.5 w-7 rounded-full bg-black transition-all duration-300 peer-checked:bg-transparent">
                  <span data-source-file="src/pages/home.astro" data-source-line-start="44" data-source-line-end="44" class="absolute left-0 top-[-0.375rem] h-0.5 w-7 rounded-full bg-black transition-all duration-300 peer-checked:top-0 peer-checked:rotate-45"></span>
                  <span data-source-file="src/pages/home.astro" data-source-line-start="45" data-source-line-end="45" class="absolute left-0 bottom-[-0.375rem] h-0.5 w-7 rounded-full bg-black transition-all duration-300 peer-checked:bottom-0 peer-checked:-rotate-45"></span>
                </div>
              </div>
            </label>
            <div data-source-file="src/pages/home.astro" data-source-line-start="49" data-source-line-end="65" class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 peer-checked:opacity-100 opacity-0 pointer-events-none peer-checked:pointer-events-auto">
              <div data-source-file="src/pages/home.astro" data-source-line-start="50" data-source-line-end="64" class="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-background shadow-2xl transition-transform duration-400 ease-in-out translate-x-full peer-checked:translate-x-0">
                <div data-source-file="src/pages/home.astro" data-source-line-start="51" data-source-line-end="63" class="flex flex-col h-full p-6 pt-20">
                  <label data-source-file="src/pages/home.astro" data-source-line-start="52" data-source-line-end="52" for="mobile-menu" class="absolute right-6 top-6 text-3xl font-bold text-gray-400 hover:text-black cursor-pointer">×</label>
                  <nav data-source-file="src/pages/home.astro" data-source-line-start="53" data-source-line-end="58" class="flex flex-col gap-6 text-lg font-medium mt-4">
                    <a data-source-file="src/pages/home.astro" data-source-line-start="54" data-source-line-end="54" href="/ride-request" class="hover:text-primary">Ride</a>
                    <a data-source-file="src/pages/home.astro" data-source-line-start="55" data-source-line-end="55" href="#" class="hover:text-primary">Drive</a>
                    <a data-source-file="src/pages/home.astro" data-source-line-start="56" data-source-line-end="56" href="#" class="hover:text-primary">Business</a>
                    <a data-source-file="src/pages/home.astro" data-source-line-start="57" data-source-line-end="57" href="#" class="hover:text-primary">Help</a>
                  </nav>
                  <div data-source-file="src/pages/home.astro" data-source-line-start="59" data-source-line-end="62" class="mt-10 flex flex-col gap-4 pt-8 border-t border-border">
                    <a data-source-file="src/pages/home.astro" data-source-line-start="60" data-source-line-end="60" href="/login" class="rounded-2xl border border-border px-6 py-3.5 text-center font-medium hover:bg-muted">Sign in</a>
                    <a data-source-file="src/pages/home.astro" data-source-line-start="61" data-source-line-end="61" href="/signup" class="rounded-2xl bg-primary px-6 py-3.5 text-center font-semibold text-primary-foreground hover:bg-primary/90">Sign up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main data-source-file="src/pages/home.astro" data-source-line-start="70" data-source-line-end="149">
        <!-- Hero -->
        <section data-source-file="src/pages/home.astro" data-source-line-start="72" data-source-line-end="133" class="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div data-source-file="src/pages/home.astro" data-source-line-start="73" data-source-line-end="104" class="space-y-6">
            <h1 data-source-file="src/pages/home.astro" data-source-line-start="74" data-source-line-end="76" class="text-5xl sm:text-6xl font-semibold leading-tight tracking-tight">
              Request a ride<br data-source-file="src/pages/home.astro" data-source-line-start="75" data-source-line-end="75">for now or later
            </h1>
            <p data-source-file="src/pages/home.astro" data-source-line-start="77" data-source-line-end="79" class="text-lg text-muted-foreground max-w-md">
              Add your trip details, hop in, and go. Fast pickup, clear pricing, and reliable support.
            </p>

            <form data-source-file="src/pages/home.astro" data-source-line-start="81" data-source-line-end="103" class="mt-8 rounded-3xl bg-card p-7 shadow-soft" action="/ride-request">
              <div data-source-file="src/pages/home.astro" data-source-line-start="82" data-source-line-end="88" class="flex items-center justify-between gap-3 mb-5">
                <label data-source-file="src/pages/home.astro" data-source-line-start="83" data-source-line-end="83" class="text-sm font-medium" for="pickup-when">Pickup time</label>
                <select data-source-file="src/pages/home.astro" data-source-line-start="84" data-source-line-end="87" id="pickup-when" name="when" class="h-10 rounded-full border border-input bg-background px-5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option data-source-file="src/pages/home.astro" data-source-line-start="85" data-source-line-end="85" value="now" selected>Pickup now</option>
                  <option data-source-file="src/pages/home.astro" data-source-line-start="86" data-source-line-end="86" value="later">Pickup later</option>
                </select>
              </div>

              <div data-source-file="src/pages/home.astro" data-source-line-start="90" data-source-line-end="93" class="space-y-4">
                <input data-source-file="src/pages/home.astro" data-source-line-start="91" data-source-line-end="91" id="pickup" name="pickup" placeholder="Pickup location" class="h-12 w-full rounded-2xl border border-gray-300 bg-white px-5 text-sm outline-none focus:ring-2 focus:ring-emerald-400" required>
                <input data-source-file="src/pages/home.astro" data-source-line-start="92" data-source-line-end="92" id="dropoff" name="dropoff" placeholder="Dropoff location" class="h-12 w-full rounded-2xl border border-gray-300 bg-white px-5 text-sm outline-none focus:ring-2 focus:ring-emerald-400" required>
              </div>

              <div data-source-file="src/pages/home.astro" data-source-line-start="95" data-source-line-end="102" class="mt-7 flex flex-col sm:flex-row gap-4">
                <button data-source-file="src/pages/home.astro" data-source-line-start="96" data-source-line-end="98" type="submit" class="flex-1 h-12 rounded-2xl bg-black text-white font-semibold hover:bg-black/90 transition-all">
                  See prices
                </button>
                <a data-source-file="src/pages/home.astro" data-source-line-start="99" data-source-line-end="101" href="/signup" class="flex-1 h-12 flex items-center justify-center rounded-2xl border border-gray-300 font-medium hover:bg-gray-50 transition-all">
                  Sign up to ride
                </a>
              </div>
            </form>
          </div>

          <!-- Right Visual -->
          <div data-source-file="src/pages/home.astro" data-source-line-start="107" data-source-line-end="132" class="relative">
            <div data-source-file="src/pages/home.astro" data-source-line-start="108" data-source-line-end="131" class="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card">
              <div data-source-file="src/pages/home.astro" data-source-line-start="109" data-source-line-end="130" class="flex h-full flex-col justify-between">
                <div data-source-file="src/pages/home.astro" data-source-line-start="110" data-source-line-end="119" class="flex gap-4">
                  <div data-source-file="src/pages/home.astro" data-source-line-start="111" data-source-line-end="114" class="flex-1 rounded-2xl border border-border bg-background/80 p-5 shadow-soft">
                    <p data-source-file="src/pages/home.astro" data-source-line-start="112" data-source-line-end="112" class="font-semibold">Your ride, your way</p>
                    <p data-source-file="src/pages/home.astro" data-source-line-start="113" data-source-line-end="113" class="text-sm text-muted-foreground mt-1">Comfort • Economy • Premium</p>
                  </div>
                  <div data-source-file="src/pages/home.astro" data-source-line-start="115" data-source-line-end="118" class="flex-1 rounded-2xl border border-border bg-background/80 p-5 shadow-soft">
                    <p data-source-file="src/pages/home.astro" data-source-line-start="116" data-source-line-end="116" class="font-semibold">700+ airports</p>
                    <p data-source-file="src/pages/home.astro" data-source-line-start="117" data-source-line-end="117" class="text-sm text-muted-foreground mt-1">Schedule ahead</p>
                  </div>
                </div>
                <div data-source-file="src/pages/home.astro" data-source-line-start="120" data-source-line-end="129" class="grid grid-cols-2 gap-4">
                  <div data-source-file="src/pages/home.astro" data-source-line-start="121" data-source-line-end="124" class="rounded-2xl border border-border bg-background/80 p-5 shadow-soft">
                    <p data-source-file="src/pages/home.astro" data-source-line-start="122" data-source-line-end="122" class="font-semibold">Upfront pricing</p>
                    <p data-source-file="src/pages/home.astro" data-source-line-start="123" data-source-line-end="123" class="text-sm text-muted-foreground mt-1">No surprises</p>
                  </div>
                  <div data-source-file="src/pages/home.astro" data-source-line-start="125" data-source-line-end="128" class="rounded-2xl border border-border bg-background/80 p-5 shadow-soft">
                    <p data-source-file="src/pages/home.astro" data-source-line-start="126" data-source-line-end="126" class="font-semibold">Safety tools</p>
                    <p data-source-file="src/pages/home.astro" data-source-line-start="127" data-source-line-end="127" class="text-sm text-muted-foreground mt-1">Trip sharing + SOS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- App Promotion -->
        <section data-source-file="src/pages/home.astro" data-source-line-start="136" data-source-line-end="148" class="border-t border-border bg-muted/40 py-16">
          <div data-source-file="src/pages/home.astro" data-source-line-start="137" data-source-line-end="147" class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div data-source-file="src/pages/home.astro" data-source-line-start="138" data-source-line-end="141">
              <h2 data-source-file="src/pages/home.astro" data-source-line-start="139" data-source-line-end="139" class="text-3xl font-semibold tracking-tight">Do more in the app</h2>
              <p data-source-file="src/pages/home.astro" data-source-line-start="140" data-source-line-end="140" class="mt-3 text-muted-foreground">Save places, view history, manage payments — all in one place.</p>
            </div>
            <div data-source-file="src/pages/home.astro" data-source-line-start="142" data-source-line-end="146" class="flex justify-end">
              <a data-source-file="src/pages/home.astro" data-source-line-start="143" data-source-line-end="145" href="#" class="inline-flex h-12 items-center px-8 rounded-2xl bg-black text-white font-semibold hover:bg-black/90 transition-all">
                Download the app
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer data-source-file="src/pages/home.astro" data-source-line-start="151" data-source-line-end="155" class="border-t border-border py-12 bg-muted/40">
        <div data-source-file="src/pages/home.astro" data-source-line-start="152" data-source-line-end="154" class="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © ${(/* @__PURE__ */ new Date()).getFullYear()} Bossie Ride • Nairobi, Kenya
        </div>
      </footer>
    </div>
  
` })}`, "/home/rayan/bossie-ride/src/pages/home.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/home.astro";
const $$url = "/home.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
