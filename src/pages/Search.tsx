import { useMemo, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterBand from "@/components/NewsletterBand";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { properties, ListingType, PropertyType, Furnishing } from "@/data/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import { MapPin, SlidersHorizontal, Bell } from "lucide-react";
import { toast } from "sonner";

const propertyTypes: PropertyType[] = ["Villa", "Apartment", "Penthouse", "Townhouse", "Estate"];
const furnishings: Furnishing[] = ["Furnished", "Unfurnished", "Part-furnished"];

const Search = () => {
  const [params, setParams] = useSearchParams();
  const initialType = (params.get("type") as ListingType) || "sale";
  const [type, setType] = useState<ListingType>(initialType);
  const [refQuery, setRefQuery] = useState(params.get("ref") || "");
  const [city, setCity] = useState(params.get("city") || "");
  const [minPrice, setMinPrice] = useState(params.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(params.get("maxPrice") || "");
  const [beds, setBeds] = useState(params.get("beds") || "");
  const [propType, setPropType] = useState<string>(params.get("propType") || "");
  const [furnishing, setFurnishing] = useState<string>(params.get("furn") || "");
  const [availFrom, setAvailFrom] = useState<string>(params.get("from") || "");
  const [feature, setFeature] = useState<string>(params.get("feature") || "");
  const [sort, setSort] = useState<string>(params.get("sort") || "featured");

  useEffect(() => {
    document.title = `Search ${type === "rent" ? "Long-Term Rentals" : "Properties for Sale"} · Oasis Europe`;
  }, [type]);

  // Sync URL
  useEffect(() => {
    const next = new URLSearchParams();
    next.set("type", type);
    if (refQuery) next.set("ref", refQuery);
    if (city) next.set("city", city);
    if (minPrice) next.set("minPrice", minPrice);
    if (maxPrice) next.set("maxPrice", maxPrice);
    if (beds) next.set("beds", beds);
    if (propType) next.set("propType", propType);
    if (furnishing) next.set("furn", furnishing);
    if (availFrom) next.set("from", availFrom);
    if (feature) next.set("feature", feature);
    if (sort && sort !== "featured") next.set("sort", sort);
    setParams(next, { replace: true });
  }, [type, refQuery, city, minPrice, maxPrice, beds, propType, furnishing, availFrom, feature, sort, setParams]);

  const cities = useMemo(() => Array.from(new Set(properties.map((p) => p.city))).sort(), []);
  const allFeatures = useMemo(
    () => Array.from(new Set(properties.flatMap((p) => p.features))).sort(),
    []
  );

  const results = useMemo(() => {
    let r = properties.filter((p) => p.type === type);
    if (refQuery.trim()) r = r.filter((p) => p.ref.toLowerCase().includes(refQuery.trim().toLowerCase()));
    if (city) r = r.filter((p) => p.city.toLowerCase() === city.toLowerCase());
    if (minPrice) r = r.filter((p) => p.price >= Number(minPrice));
    if (maxPrice) r = r.filter((p) => p.price <= Number(maxPrice));
    if (beds) r = r.filter((p) => p.beds >= Number(beds));
    if (propType) r = r.filter((p) => p.propertyType === propType);
    if (furnishing) r = r.filter((p) => p.furnishing === furnishing);
    if (availFrom) r = r.filter((p) => new Date(p.availableFrom) <= new Date(availFrom));
    if (feature) r = r.filter((p) => p.features.includes(feature));

    switch (sort) {
      case "price-asc": r = [...r].sort((a, b) => a.price - b.price); break;
      case "price-desc": r = [...r].sort((a, b) => b.price - a.price); break;
      case "beds-desc": r = [...r].sort((a, b) => b.beds - a.beds); break;
      case "size-desc": r = [...r].sort((a, b) => b.sizeSqm - a.sizeSqm); break;
      default: r = [...r].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }
    return r;
  }, [type, refQuery, city, minPrice, maxPrice, beds, propType, furnishing, availFrom, feature, sort]);

  const reset = () => {
    setRefQuery(""); setCity(""); setMinPrice(""); setMaxPrice(""); setBeds("");
    setPropType(""); setFurnishing(""); setAvailFrom(""); setFeature(""); setSort("featured");
  };

  // structured data
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: results.slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${typeof window !== "undefined" ? window.location.origin : ""}/properties/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <section className="pt-28 md:pt-36 pb-10 section-padding">
        <p className="label-sm mb-3">Browse</p>
        <h1 className="font-gourmand text-3xl md:text-5xl font-normal leading-[1.1] mb-6">
          Curated Properties <em className="italic">for Sale & Long-Term Rent</em>
        </h1>

        <Tabs value={type} onValueChange={(v) => setType(v as ListingType)} className="mt-4">
          <TabsList className="bg-secondary">
            <TabsTrigger value="sale" className="px-6 uppercase tracking-[0.12em] text-xs">Buy</TabsTrigger>
            <TabsTrigger value="rent" className="px-6 uppercase tracking-[0.12em] text-xs">Long-Term Rent</TabsTrigger>
          </TabsList>
          <TabsContent value="sale" />
          <TabsContent value="rent" />
        </Tabs>
      </section>

      <section className="section-padding pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Filters */}
          <aside className="bg-secondary/50 p-6 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-auto">
            <div className="flex items-center gap-2 mb-5">
              <SlidersHorizontal size={16} />
              <h2 className="text-sm font-medium uppercase tracking-[0.1em]">Filters</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="ref">Reference number</Label>
                <Input id="ref" placeholder="e.g. OE-MB-56" value={refQuery} onChange={(e) => setRefQuery(e.target.value)} />
              </div>

              <div>
                <Label htmlFor="city">Location</Label>
                <Input
                  id="city"
                  placeholder="City (autosuggest)"
                  list="city-options"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <datalist id="city-options">
                  {cities.map((c) => (<option key={c} value={c} />))}
                </datalist>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label>Min price</Label>
                  <Input type="number" inputMode="numeric" placeholder="€" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                </div>
                <div>
                  <Label>Max price</Label>
                  <Input type="number" inputMode="numeric" placeholder="€" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label>Bedrooms</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={beds} onChange={(e) => setBeds(e.target.value)}>
                    <option value="">Any</option>
                    {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>{n}+</option>)}
                  </select>
                </div>
                <div>
                  <Label>Property type</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={propType} onChange={(e) => setPropType(e.target.value)}>
                    <option value="">Any</option>
                    {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {type === "rent" && (
                <div>
                  <Label>Furnishing</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={furnishing} onChange={(e) => setFurnishing(e.target.value)}>
                    <option value="">Any</option>
                    {furnishings.map((f) => <option key={f} value={f}>{f}</option>)}
                  </select>
                </div>
              )}

              <div>
                <Label htmlFor="from">Available from</Label>
                <Input id="from" type="date" value={availFrom} onChange={(e) => setAvailFrom(e.target.value)} />
              </div>

              <div>
                <Label>Feature</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={feature} onChange={(e) => setFeature(e.target.value)}>
                  <option value="">Any</option>
                  {allFeatures.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>

              <div>
                <Label>Sort</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: low to high</option>
                  <option value="price-desc">Price: high to low</option>
                  <option value="beds-desc">Most bedrooms</option>
                  <option value="size-desc">Largest size</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm" onClick={reset}>Reset filters</Button>
                <Button
                  variant="dark"
                  size="sm"
                  onClick={() => toast.success("Search saved", { description: "We will email matching listings." })}
                >
                  <Bell size={14} /> Save search & alert
                </Button>
              </div>
            </div>
          </aside>

          {/* Results + Map */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-muted-foreground">
                {results.length} {results.length === 1 ? "property" : "properties"} found
              </p>
              <Link to="/" className="hidden md:inline text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">← Back home</Link>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-[16/7] md:aspect-[16/5] mb-8 bg-secondary border border-border overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, hsl(var(--accent) / 0.15) 0, transparent 40%), radial-gradient(circle at 70% 60%, hsl(var(--accent) / 0.12) 0, transparent 40%), linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--muted)) 100%)",
                }}
              />
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              {results.slice(0, 8).map((p, i) => (
                <span
                  key={p.slug}
                  className="absolute -translate-x-1/2 -translate-y-1/2 bg-warm-black text-sand text-[0.65rem] px-2 py-1 rounded-full shadow-md flex items-center gap-1"
                  style={{ left: `${15 + (i * 11) % 70}%`, top: `${20 + (i * 17) % 60}%` }}
                >
                  <MapPin size={10} /> {p.city}
                </span>
              ))}
              <div className="absolute bottom-3 left-3 text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground bg-background/80 px-2 py-1">
                Map preview · interactive map coming soon
              </div>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-border">
                <p className="text-muted-foreground">No properties match your filters.</p>
                <Button variant="link" onClick={reset}>Reset filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {results.map((p, i) => (<PropertyCard key={p.slug} property={p} index={i} />))}
              </div>
            )}
          </div>
        </div>
      </section>

      <NewsletterBand />
      <Footer />
      <FloatingCTABar />
    </main>
  );
};

export default Search;
