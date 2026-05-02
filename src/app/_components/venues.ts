export type Event = {
  id: string;
  title: string;
  date: string; // ISO date: YYYY-MM-DD
};

export type Venue = {
  slug: string;
  name: string;
  city: string;
  tag: string;
  lat: number;
  lng: number;
  events: Event[];
};

export const VENUES: Venue[] = [
  {
    slug: "quiet-garden",
    name: "The Quiet Garden",
    city: "Brooklyn, NY",
    tag: "Tea house · 30 seats",
    lat: 40.6782,
    lng: -73.9442,
    events: [
      { id: "qg-1", title: "Long-form letters night", date: "2026-05-04" },
      { id: "qg-2", title: "Sunday tea + strangers", date: "2026-05-11" },
    ],
  },
  {
    slug: "lantern-hall",
    name: "Lantern Hall",
    city: "Oakland, CA",
    tag: "Loft venue · 80 seats",
    lat: 37.8044,
    lng: -122.2712,
    events: [
      { id: "lh-1", title: "Phones-in-the-basket dinner", date: "2026-05-06" },
      { id: "lh-2", title: "Vinyl + conversation", date: "2026-05-18" },
    ],
  },
  {
    slug: "fireside-co",
    name: "Fireside Co.",
    city: "Asheville, NC",
    tag: "Cabin · 24 seats",
    lat: 35.5951,
    lng: -82.5515,
    events: [
      { id: "fs-1", title: "Storytelling around the fire", date: "2026-05-09" },
    ],
  },
  {
    slug: "salt-room",
    name: "Salt Room",
    city: "Austin, TX",
    tag: "Studio · 40 seats",
    lat: 30.2672,
    lng: -97.7431,
    events: [
      { id: "sr-1", title: "Slow breakfast salon", date: "2026-05-12" },
      { id: "sr-2", title: "Hand-written letters workshop", date: "2026-05-22" },
    ],
  },
  {
    slug: "driftwood-studio",
    name: "Driftwood Studio",
    city: "Seattle, WA",
    tag: "Warehouse · 120 seats",
    lat: 47.6062,
    lng: -122.3321,
    events: [
      { id: "dw-1", title: "Dance + dinner, no screens", date: "2026-05-16" },
    ],
  },
  {
    slug: "fern-stone",
    name: "Fern & Stone",
    city: "Portland, OR",
    tag: "Garden · 50 seats",
    lat: 45.5152,
    lng: -122.6784,
    events: [
      { id: "fs2-1", title: "Garden supper club", date: "2026-05-24" },
      { id: "fs2-2", title: "Reading hour, out loud", date: "2026-06-01" },
    ],
  },
];
