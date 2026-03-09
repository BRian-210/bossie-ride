import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from "../astro/server.G4c5_9v2.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.6nv4a3hw.js";
import { renderers } from "../renderers.mjs";
const $$Index = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Bossie Ride | Request rides 24/7", description: "Request a ride for now or later with Bossie Ride." }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/index.astro" data-source-line-start="7" data-source-line-end="324" class="marketing-light min-h-dvh bg-background text-foreground">
    <!-- Top navigation -->
    <header data-source-file="src/pages/index.astro" data-source-line-start="9" data-source-line-end="32" class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div data-source-file="src/pages/index.astro" data-source-line-start="10" data-source-line-end="31" class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a data-source-file="src/pages/index.astro" data-source-line-start="11" data-source-line-end="14" href="./ride-request" class="flex items-center gap-2 font-semibold tracking-tight">
          <span data-source-file="src/pages/index.astro" data-source-line-start="12" data-source-line-end="12" class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">B</span>
          <span data-source-file="src/pages/index.astro" data-source-line-start="13" data-source-line-end="13" class="text-base sm:text-lg">Bossie Ride</span>
        </a>

        <nav data-source-file="src/pages/index.astro" data-source-line-start="16" data-source-line-end="21" class="hidden items-center gap-6 text-sm md:flex" aria-label="Primary">
          <a data-source-file="src/pages/index.astro" data-source-line-start="17" data-source-line-end="17" class="hover:underline underline-offset-4" href="./ride-request">Ride</a>
          <a data-source-file="src/pages/index.astro" data-source-line-start="18" data-source-line-end="18" class="hover:underline underline-offset-4" href="./placeholder">Drive</a>
          <a data-source-file="src/pages/index.astro" data-source-line-start="19" data-source-line-end="19" class="hover:underline underline-offset-4" href="./placeholder">Business</a>
          <a data-source-file="src/pages/index.astro" data-source-line-start="20" data-source-line-end="20" class="hover:underline underline-offset-4" href="./placeholder">Help</a>
        </nav>

        <div data-source-file="src/pages/index.astro" data-source-line-start="23" data-source-line-end="30" class="flex items-center gap-2">
          <a data-source-file="src/pages/index.astro" data-source-line-start="24" data-source-line-end="26" href="./login" class="hidden rounded-full px-4 py-2 text-sm font-medium hover:bg-muted sm:inline-flex">
            Sign in
          </a>
          <a data-source-file="src/pages/index.astro" data-source-line-start="27" data-source-line-end="29" href="./login" class="inline-flex rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90">
            Sign up
          </a>
        </div>
      </div>
    </header>

    <main data-source-file="src/pages/index.astro" data-source-line-start="34" data-source-line-end="312">
      <!-- Hero -->
      <section data-source-file="src/pages/index.astro" data-source-line-start="36" data-source-line-end="128" class="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-2 lg:items-center lg:py-14">
        <div data-source-file="src/pages/index.astro" data-source-line-start="37" data-source-line-end="96" class="space-y-5">
          <h1 data-source-file="src/pages/index.astro" data-source-line-start="38" data-source-line-end="40" class="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Request a ride for now or later
          </h1>
          <p data-source-file="src/pages/index.astro" data-source-line-start="41" data-source-line-end="43" class="max-w-prose text-base text-muted-foreground sm:text-lg">
            Add your trip details, hop in, and go. Fast pickup, clear pricing, and reliable support.
          </p>

          <form data-source-file="src/pages/index.astro" data-source-line-start="45" data-source-line-end="95" class="mt-6 rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6" action="./ride-request">
            <div data-source-file="src/pages/index.astro" data-source-line-start="46" data-source-line-end="56" class="flex flex-wrap items-center justify-between gap-3">
              <label data-source-file="src/pages/index.astro" data-source-line-start="47" data-source-line-end="47" class="text-sm font-medium" for="pickup-when">Pickup time</label>
              <select id="pickup-when" name="when" class="h-10 rounded-full border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option data-source-file="src/pages/index.astro" data-source-line-start="53" data-source-line-end="53" value="now" selected>Pickup now</option>
                <option data-source-file="src/pages/index.astro" data-source-line-start="54" data-source-line-end="54" value="later">Pickup later</option>
              </select>
            </div>

            <div data-source-file="src/pages/index.astro" data-source-line-start="58" data-source-line-end="78" class="mt-4 space-y-3">
              <div data-source-file="src/pages/index.astro" data-source-line-start="59" data-source-line-end="67">
                <label data-source-file="src/pages/index.astro" data-source-line-start="60" data-source-line-end="60" class="sr-only" for="pickup">Pickup location</label>
                <input id="pickup" name="pickup" placeholder="Pickup location" class="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring">
              </div>

              <div data-source-file="src/pages/index.astro" data-source-line-start="69" data-source-line-end="77">
                <label data-source-file="src/pages/index.astro" data-source-line-start="70" data-source-line-end="70" class="sr-only" for="dropoff">Dropoff location</label>
                <input id="dropoff" name="dropoff" placeholder="Dropoff location" class="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring">
              </div>
            </div>

            <div data-source-file="src/pages/index.astro" data-source-line-start="80" data-source-line-end="90" class="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="submit" class="inline-flex h-12 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white hover:bg-black/90">
                See prices
              </button>
              <a data-source-file="src/pages/index.astro" data-source-line-start="87" data-source-line-end="89" href="./login" class="text-sm font-medium hover:underline underline-offset-4">
                Sign up to ride
              </a>
            </div>

            <p data-source-file="src/pages/index.astro" data-source-line-start="92" data-source-line-end="94" class="mt-4 text-xs text-muted-foreground">
              Certain requirements and features vary by region. Availability depends on your location.
            </p>
          </form>
        </div>

        <!-- Right-side visual (original, not copied) -->
        <div data-source-file="src/pages/index.astro" data-source-line-start="99" data-source-line-end="127" class="relative">
          <div data-source-file="src/pages/index.astro" data-source-line-start="100" data-source-line-end="124" class="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-gradient-radial-at-t from-black/10 via-transparent to-transparent p-6">
            <div data-source-file="src/pages/index.astro" data-source-line-start="101" data-source-line-end="123" class="flex h-full flex-col justify-between">
              <div data-source-file="src/pages/index.astro" data-source-line-start="102" data-source-line-end="111" class="flex items-start justify-between gap-3">
                <div data-source-file="src/pages/index.astro" data-source-line-start="103" data-source-line-end="106" class="rounded-2xl border border-border bg-background/80 p-4 shadow-soft">
                  <p data-source-file="src/pages/index.astro" data-source-line-start="104" data-source-line-end="104" class="text-sm font-semibold">Your ride, your way</p>
                  <p data-source-file="src/pages/index.astro" data-source-line-start="105" data-source-line-end="105" class="mt-1 text-sm text-muted-foreground">Comfort, economy, or premium.</p>
                </div>
                <div data-source-file="src/pages/index.astro" data-source-line-start="107" data-source-line-end="110" class="rounded-2xl border border-border bg-background/80 p-4 shadow-soft">
                  <p data-source-file="src/pages/index.astro" data-source-line-start="108" data-source-line-end="108" class="text-sm font-semibold">700+ airports</p>
                  <p data-source-file="src/pages/index.astro" data-source-line-start="109" data-source-line-end="109" class="mt-1 text-sm text-muted-foreground">Schedule pickups in advance.</p>
                </div>
              </div>

              <div data-source-file="src/pages/index.astro" data-source-line-start="113" data-source-line-end="122" class="grid gap-3 sm:grid-cols-2">
                <div data-source-file="src/pages/index.astro" data-source-line-start="114" data-source-line-end="117" class="rounded-2xl border border-border bg-background/80 p-4 shadow-soft">
                  <p data-source-file="src/pages/index.astro" data-source-line-start="115" data-source-line-end="115" class="text-sm font-semibold">Upfront pricing</p>
                  <p data-source-file="src/pages/index.astro" data-source-line-start="116" data-source-line-end="116" class="mt-1 text-sm text-muted-foreground">Know your fare before you go.</p>
                </div>
                <div data-source-file="src/pages/index.astro" data-source-line-start="118" data-source-line-end="121" class="rounded-2xl border border-border bg-background/80 p-4 shadow-soft">
                  <p data-source-file="src/pages/index.astro" data-source-line-start="119" data-source-line-end="119" class="text-sm font-semibold">Safety tools</p>
                  <p data-source-file="src/pages/index.astro" data-source-line-start="120" data-source-line-end="120" class="mt-1 text-sm text-muted-foreground">Trip sharing and support.</p>
                </div>
              </div>
            </div>
          </div>

          <div data-source-file="src/pages/index.astro" data-source-line-start="126" data-source-line-end="126" class="pointer-events-none absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-black/5 blur-2xl lg:block"></div>
        </div>
      </section>

      <!-- App callout -->
      <section data-source-file="src/pages/index.astro" data-source-line-start="131" data-source-line-end="166" class="border-t border-border bg-muted/40">
        <div data-source-file="src/pages/index.astro" data-source-line-start="132" data-source-line-end="165" class="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-2 md:items-center">
          <div data-source-file="src/pages/index.astro" data-source-line-start="133" data-source-line-end="138" class="space-y-2">
            <h2 data-source-file="src/pages/index.astro" data-source-line-start="134" data-source-line-end="134" class="text-2xl font-semibold tracking-tight sm:text-3xl">Do more in the app</h2>
            <p data-source-file="src/pages/index.astro" data-source-line-start="135" data-source-line-end="137" class="text-sm text-muted-foreground sm:text-base">
              Save places, view ride history, manage payments, and get support—right from your phone.
            </p>
          </div>

          <div data-source-file="src/pages/index.astro" data-source-line-start="140" data-source-line-end="164" class="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-end">
            <div data-source-file="src/pages/index.astro" data-source-line-start="141" data-source-line-end="156" class="hidden items-center gap-3 rounded-2xl border border-border bg-background p-3 shadow-soft sm:flex">
              <div data-source-file="src/pages/index.astro" data-source-line-start="142" data-source-line-end="151" class="grid h-14 w-14 grid-cols-7 gap-[2px] rounded-lg bg-black p-2">
                ${Array.from({ length: 49 }).map((_, i) => renderTemplate`<span${addAttribute(["block h-full w-full rounded-[1px]", i % 3 === 0 || i % 5 === 0 ? "bg-white" : "bg-black"], "class:list")}></span>`)}
              </div>
              <div data-source-file="src/pages/index.astro" data-source-line-start="152" data-source-line-end="155" class="leading-tight">
                <p data-source-file="src/pages/index.astro" data-source-line-start="153" data-source-line-end="153" class="text-sm font-semibold">Scan to download</p>
                <p data-source-file="src/pages/index.astro" data-source-line-start="154" data-source-line-end="154" class="text-xs text-muted-foreground">Get the Bossie Ride app</p>
              </div>
            </div>

            <a href="./placeholder" class="inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white hover:bg-black/90">
              Download the app
            </a>
          </div>
        </div>
      </section>

      <!-- Suggestions -->
      <section data-source-file="src/pages/index.astro" data-source-line-start="169" data-source-line-end="213" class="mx-auto max-w-6xl px-4 py-12">
        <div data-source-file="src/pages/index.astro" data-source-line-start="170" data-source-line-end="180" class="flex items-end justify-between gap-6">
          <div data-source-file="src/pages/index.astro" data-source-line-start="171" data-source-line-end="176">
            <h2 data-source-file="src/pages/index.astro" data-source-line-start="172" data-source-line-end="172" class="text-2xl font-semibold tracking-tight sm:text-3xl">Suggestions</h2>
            <p data-source-file="src/pages/index.astro" data-source-line-start="173" data-source-line-end="175" class="mt-2 text-sm text-muted-foreground sm:text-base">
              Popular ways to get more out of Bossie Ride.
            </p>
          </div>
          <a data-source-file="src/pages/index.astro" data-source-line-start="177" data-source-line-end="179" class="hidden text-sm font-medium hover:underline underline-offset-4 sm:inline" href="./ride-request">
            Request a ride
          </a>
        </div>

        <div data-source-file="src/pages/index.astro" data-source-line-start="182" data-source-line-end="212" class="mt-6 grid gap-4 md:grid-cols-3">
          <article data-source-file="src/pages/index.astro" data-source-line-start="183" data-source-line-end="191" class="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 data-source-file="src/pages/index.astro" data-source-line-start="184" data-source-line-end="184" class="text-lg font-semibold">Bossie Plus</h3>
            <p data-source-file="src/pages/index.astro" data-source-line-start="185" data-source-line-end="187" class="mt-2 text-sm text-muted-foreground">
              One membership for member pricing and perks on rides and more.
            </p>
            <a data-source-file="src/pages/index.astro" data-source-line-start="188" data-source-line-end="190" class="mt-4 inline-flex text-sm font-semibold hover:underline underline-offset-4" href="./placeholder">
              Try it now
            </a>
          </article>

          <article data-source-file="src/pages/index.astro" data-source-line-start="193" data-source-line-end="201" class="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 data-source-file="src/pages/index.astro" data-source-line-start="194" data-source-line-end="194" class="text-lg font-semibold">Package delivery</h3>
            <p data-source-file="src/pages/index.astro" data-source-line-start="195" data-source-line-end="197" class="mt-2 text-sm text-muted-foreground">
              Send items across town with door-to-door pickup and dropoff.
            </p>
            <a data-source-file="src/pages/index.astro" data-source-line-start="198" data-source-line-end="200" class="mt-4 inline-flex text-sm font-semibold hover:underline underline-offset-4" href="./placeholder">
              Get details
            </a>
          </article>

          <article data-source-file="src/pages/index.astro" data-source-line-start="203" data-source-line-end="211" class="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 data-source-file="src/pages/index.astro" data-source-line-start="204" data-source-line-end="204" class="text-lg font-semibold">Airport rides</h3>
            <p data-source-file="src/pages/index.astro" data-source-line-start="205" data-source-line-end="207" class="mt-2 text-sm text-muted-foreground">
              Request a ride to and from major airports. Schedule ahead for peace of mind.
            </p>
            <a data-source-file="src/pages/index.astro" data-source-line-start="208" data-source-line-end="210" class="mt-4 inline-flex text-sm font-semibold hover:underline underline-offset-4" href="./placeholder">
              Search airports
            </a>
          </article>
        </div>
      </section>

      <!-- Value props -->
      <section data-source-file="src/pages/index.astro" data-source-line-start="216" data-source-line-end="249" class="border-t border-border bg-muted/30">
        <div data-source-file="src/pages/index.astro" data-source-line-start="217" data-source-line-end="248" class="mx-auto max-w-6xl px-4 py-12">
          <h2 data-source-file="src/pages/index.astro" data-source-line-start="218" data-source-line-end="218" class="text-2xl font-semibold tracking-tight sm:text-3xl">Travel your way</h2>
          <div data-source-file="src/pages/index.astro" data-source-line-start="219" data-source-line-end="247" class="mt-6 grid gap-6 md:grid-cols-3">
            <div data-source-file="src/pages/index.astro" data-source-line-start="220" data-source-line-end="228" class="rounded-2xl border border-border bg-background p-6 shadow-soft">
              <h3 data-source-file="src/pages/index.astro" data-source-line-start="221" data-source-line-end="221" class="text-base font-semibold">Ride options</h3>
              <p data-source-file="src/pages/index.astro" data-source-line-start="222" data-source-line-end="224" class="mt-2 text-sm text-muted-foreground">
                Choose the ride that fits your day—economy, comfort, or premium.
              </p>
              <a data-source-file="src/pages/index.astro" data-source-line-start="225" data-source-line-end="227" class="mt-4 inline-flex text-sm font-semibold hover:underline underline-offset-4" href="./select-ride-type">
                Search ride options
              </a>
            </div>
            <div data-source-file="src/pages/index.astro" data-source-line-start="229" data-source-line-end="237" class="rounded-2xl border border-border bg-background p-6 shadow-soft">
              <h3 data-source-file="src/pages/index.astro" data-source-line-start="230" data-source-line-end="230" class="text-base font-semibold">Airports</h3>
              <p data-source-file="src/pages/index.astro" data-source-line-start="231" data-source-line-end="233" class="mt-2 text-sm text-muted-foreground">
                Request rides to and from airports. Schedule a pickup for one less thing to worry about.
              </p>
              <a data-source-file="src/pages/index.astro" data-source-line-start="234" data-source-line-end="236" class="mt-4 inline-flex text-sm font-semibold hover:underline underline-offset-4" href="./placeholder">
                Search airports
              </a>
            </div>
            <div data-source-file="src/pages/index.astro" data-source-line-start="238" data-source-line-end="246" class="rounded-2xl border border-border bg-background p-6 shadow-soft">
              <h3 data-source-file="src/pages/index.astro" data-source-line-start="239" data-source-line-end="239" class="text-base font-semibold">Cities</h3>
              <p data-source-file="src/pages/index.astro" data-source-line-start="240" data-source-line-end="242" class="mt-2 text-sm text-muted-foreground">
                Available across many cities, so you can request a ride even when you’re far from home.
              </p>
              <a data-source-file="src/pages/index.astro" data-source-line-start="243" data-source-line-end="245" class="mt-4 inline-flex text-sm font-semibold hover:underline underline-offset-4" href="./placeholder">
                Search cities
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Business -->
      <section data-source-file="src/pages/index.astro" data-source-line-start="252" data-source-line-end="277" class="mx-auto max-w-6xl px-4 py-12">
        <div data-source-file="src/pages/index.astro" data-source-line-start="253" data-source-line-end="276" class="grid gap-8 md:grid-cols-2 md:items-start">
          <div data-source-file="src/pages/index.astro" data-source-line-start="254" data-source-line-end="262" class="space-y-2">
            <h2 data-source-file="src/pages/index.astro" data-source-line-start="255" data-source-line-end="255" class="text-2xl font-semibold tracking-tight sm:text-3xl">Looking for business solutions?</h2>
            <p data-source-file="src/pages/index.astro" data-source-line-start="256" data-source-line-end="258" class="text-sm text-muted-foreground sm:text-base">
              Learn how organizations can move people and deliver items with Bossie Ride.
            </p>
            <a data-source-file="src/pages/index.astro" data-source-line-start="259" data-source-line-end="261" class="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white hover:bg-black/90" href="./placeholder">
              Get started
            </a>
          </div>

          <div data-source-file="src/pages/index.astro" data-source-line-start="264" data-source-line-end="275" class="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <p data-source-file="src/pages/index.astro" data-source-line-start="265" data-source-line-end="265" class="text-sm font-semibold">Popular options</p>
            <ul data-source-file="src/pages/index.astro" data-source-line-start="266" data-source-line-end="271" class="mt-3 space-y-2 text-sm text-muted-foreground">
              <li data-source-file="src/pages/index.astro" data-source-line-start="267" data-source-line-end="267">Item delivery</li>
              <li data-source-file="src/pages/index.astro" data-source-line-start="268" data-source-line-end="268">Meal programs</li>
              <li data-source-file="src/pages/index.astro" data-source-line-start="269" data-source-line-end="269">Courtesy rides</li>
              <li data-source-file="src/pages/index.astro" data-source-line-start="270" data-source-line-end="270">Business travel</li>
            </ul>
            <a data-source-file="src/pages/index.astro" data-source-line-start="272" data-source-line-end="274" class="mt-5 inline-flex text-sm font-semibold hover:underline underline-offset-4" href="./placeholder">
              Check out our solutions
            </a>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section data-source-file="src/pages/index.astro" data-source-line-start="280" data-source-line-end="311" class="border-t border-border bg-muted/20">
        <div data-source-file="src/pages/index.astro" data-source-line-start="281" data-source-line-end="310" class="mx-auto max-w-6xl px-4 py-12">
          <h2 data-source-file="src/pages/index.astro" data-source-line-start="282" data-source-line-end="282" class="text-2xl font-semibold tracking-tight sm:text-3xl">Frequently asked questions</h2>

          <div data-source-file="src/pages/index.astro" data-source-line-start="284" data-source-line-end="309" class="mt-6 divide-y divide-border rounded-2xl border border-border bg-background shadow-soft">
            <details data-source-file="src/pages/index.astro" data-source-line-start="285" data-source-line-end="292" class="group p-6">
              <summary data-source-file="src/pages/index.astro" data-source-line-start="286" data-source-line-end="288" class="cursor-pointer list-none text-sm font-semibold">
                Can I have a lost item delivered to me?
              </summary>
              <p data-source-file="src/pages/index.astro" data-source-line-start="289" data-source-line-end="291" class="mt-3 text-sm text-muted-foreground">
                If you left something behind, you can contact the driver from your trip details and arrange a return.
              </p>
            </details>
            <details data-source-file="src/pages/index.astro" data-source-line-start="293" data-source-line-end="300" class="group p-6">
              <summary data-source-file="src/pages/index.astro" data-source-line-start="294" data-source-line-end="296" class="cursor-pointer list-none text-sm font-semibold">
                Can I request a ride that picks up friends in different locations?
              </summary>
              <p data-source-file="src/pages/index.astro" data-source-line-start="297" data-source-line-end="299" class="mt-3 text-sm text-muted-foreground">
                You can coordinate pickup points with friends and share trip status so everyone stays in sync.
              </p>
            </details>
            <details data-source-file="src/pages/index.astro" data-source-line-start="301" data-source-line-end="308" class="group p-6">
              <summary data-source-file="src/pages/index.astro" data-source-line-start="302" data-source-line-end="304" class="cursor-pointer list-none text-sm font-semibold">
                Is there a ride option for 5+ people?
              </summary>
              <p data-source-file="src/pages/index.astro" data-source-line-start="305" data-source-line-end="307" class="mt-3 text-sm text-muted-foreground">
                Larger vehicles may be available depending on your city. Check ride options during request.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>

    <footer data-source-file="src/pages/index.astro" data-source-line-start="314" data-source-line-end="323" class="border-t border-border">
      <div data-source-file="src/pages/index.astro" data-source-line-start="315" data-source-line-end="322" class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p data-source-file="src/pages/index.astro" data-source-line-start="316" data-source-line-end="316" class="text-sm text-muted-foreground">© ${(/* @__PURE__ */ new Date()).getFullYear()} Bossie Ride</p>
        <div data-source-file="src/pages/index.astro" data-source-line-start="317" data-source-line-end="321" class="flex flex-wrap gap-4 text-sm">
          <a data-source-file="src/pages/index.astro" data-source-line-start="318" data-source-line-end="318" class="text-muted-foreground hover:text-foreground hover:underline underline-offset-4" href="./placeholder">Privacy</a>
          <a data-source-file="src/pages/index.astro" data-source-line-start="319" data-source-line-end="319" class="text-muted-foreground hover:text-foreground hover:underline underline-offset-4" href="./placeholder">Terms</a>
          <a data-source-file="src/pages/index.astro" data-source-line-start="320" data-source-line-end="320" class="text-muted-foreground hover:text-foreground hover:underline underline-offset-4" href="./placeholder">Help</a>
        </div>
      </div>
    </footer>
  </div>
` })}`, "/home/rayan/bossie-ride/src/pages/index.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
