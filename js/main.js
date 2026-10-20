/* ALISHAN — interactions & animations */
(function () {
  "use strict";

  /* ---------- Menu data (edit prices here) ---------- */
  var V = "v", N = "n";
  var MENU = [
    { id: "biryani", label: "Biryani", groups: [
      { title: "Biryani & Plates", items: [
        ["Tiffin Biryani", "", 50, N, "Best Price"],
        ["Chicken Biryani + Chicken Chap", "", 160, N, "Bestseller"],
        ["Mutton Biryani + Mutton Chap", "", 360, N, "Royal"],
        ["Mutton Biryani + Chicken Chap (1 pc)", "", 260, N],
        ["Aloo Biryani + Chicken Chap (1 pc)", "", 120, N],
        ["Aloo Biryani + Butter Chicken (2 pcs)", "", 150, N],
        ["Aloo Biryani + Chicken Kasa (2 pcs)", "", 120, N]
      ]}
    ]},
    { id: "starters", label: "Starters & Kebabs", groups: [
      { title: "Fish & Prawn", items: [
        ["Fish Patisapta", "2 pcs", 130, N], ["Fish Fry", "2 pcs", 160, N],
        ["Gondhoraj Fish Fry", "2 pcs", 180, N, "Must Try"], ["Fish Nuggets", "8 pcs", 150, N],
        ["Prawn Popcorn", "15 pcs", 150, N], ["Prawn Chop", "2 pcs", 110, N], ["Prawn Ball", "5 pcs", 120, N]
      ]},
      { title: "Chicken & Mutton", items: [
        ["Mutton Chop", "2 pcs", 120, N], ["Mutton Cutlet", "2 pcs", 140, N],
        ["Chicken Spring Roll", "3 pcs", 130, N], ["Chicken Bread Pocket", "1 pc", 100, N],
        ["Chicken Shapale", "2 pcs", 120, N], ["Chicken à la Kiev", "2 pcs", 180, N]
      ]},
      { title: "Kebabs", items: [
        ["Tikka Kabab", "2 pcs", 100, N], ["Reshmi Kabab", "2 pcs", 100, N], ["Turkish Kabab", "1 pc", 110, N]
      ]},
      { title: "Snacks", items: [
        ["Onion Ring", "7 pcs", 100, V], ["Prawn Momo", "6 pcs", 100, N], ["Kurkure Momo", "6 pcs", 100, N],
        ["Mushroom Momo", "6 pcs", 100, V], ["Mutton Momo", "6 pcs", 120, N]
      ]}
    ]},
    { id: "momo", label: "Momos", groups: [
      { title: "Veg Momo · 6 pcs", items: [
        ["Mix Veg Momo", "", 50, V], ["Fried Momo", "", 60, V], ["Paneer Momo", "", 60, V],
        ["Chilli Paneer Momo", "", 60, V], ["Veg Pan Fried Momo", "", 80, V], ["Paneer Fried Momo", "", 70, V],
        ["Chilli Paneer Fried Momo", "", 70, V], ["Paneer Pan Fried Momo", "", 90, V], ["Chilli Paneer Pan Fried Momo", "", 90, V]
      ]},
      { title: "Non-Veg Momo · 6 pcs", items: [
        ["Fish Momo", "5 pcs", 70, N], ["Chicken Momo", "", 60, N], ["Chicken Schezwan Momo", "", 60, N],
        ["Chicken Gondhoraj Momo", "", 80, N], ["Chicken Fried Momo", "", 70, N], ["Chicken Schezwan Fried Momo", "", 70, N],
        ["Chicken Pan Fried Momo", "", 90, N], ["Chicken Schezwan Pan Fried Momo", "", 90, N], ["Chicken Cheese Momo", "", 70, N],
        ["Chicken Cheese Fried Momo", "", 80, N], ["Chicken Cheese Pan Fried Momo", "", 100, N], ["Mutton Momo", "", 120, N],
        ["Mushroom Momo", "", 100, V], ["Prawn Momo", "", 100, N], ["Kurkure Momo", "", 100, N]
      ]}
    ]},
    { id: "fast", label: "Pizza · Burger", groups: [
      { title: "Pizza", items: [["Veg Pizza", "", 140, V], ["Paneer Pizza", "", 150, V], ["Chicken Pizza", "", 160, N]] },
      { title: "Burger", items: [["Veg Burger", "", 80, V], ["Paneer Burger", "", 90, V], ["Chicken Burger", "", 110, N]] },
      { title: "Sandwich", items: [["Veg Sandwich", "", 80, V], ["Chicken Sandwich", "", 100, N]] }
    ]},
    { id: "snack", label: "Snack Combos", groups: [
      { title: "Veg", items: [
        ["Veg Cutlet + Veggie Finger + Masala Fries", "1 + 2 pcs", 99, V],
        ["Potato Bite + French Fries", "5 pcs", 85, V],
        ["Onion Ring + Veg Nuggets + Cheese Pizza Finger", "2 + 2 + 2 pcs", 89, V]
      ]},
      { title: "Chicken", items: [
        ["Chicken Popcorn + Nuggets + Chilli Garlic Finger", "5 + 2 + 2 pcs", 110, N],
        ["Chicken Cutlet + Small Wings + Cheese Ball", "1 + 1 + 2 pcs", 150, N]
      ]},
      { title: "Fish & Prawn", items: [
        ["Fish Ball + Fish Finger", "2 + 2 pcs", 90, N], ["Fish Popcorn + Fish Nuggets", "5 + 3 pcs", 105, N],
        ["Fish Cutlet + Fish Finger", "1 + 2 pcs", 105, N], ["Prawn Popcorn + Prawn Chop + Prawn Ball", "5 + 1 + 2 pcs", 160, N]
      ]},
      { title: "Sea Food Combo", items: [
        ["Small", "Crab claw lollipop, fish lollipop, lobster bite, fish fries", 149, N],
        ["Big", "4 crab claw, 4 fish lollipop, 5 lobster bite, 5 fish fries", 249, N, "Feast"]
      ]}
    ]}
  ];

  var COMBOS = [
    ["Chicken Burger + French Fries", 150], ["Chicken Pizza + French Fries + Egg Chow", 200],
    ["Dry Chilli Chicken (4 pcs)", 150], ["Lachha Paratha (2) + Chicken Kasa (2)", 100],
    ["Veg Rice + Chilli Chicken (2 pcs)", 120], ["Aloo Biryani + Chicken Chap", 120],
    ["Aloo Biryani + Butter Chicken (2 pcs)", 150], ["Veg Rice + Mutton Kasa (2 pcs)", 200],
    ["Aloo Biryani + Chicken Kasa (2 pcs)", 120], ["Mutton Biryani + Chicken Chap", 260, 1],
    ["Chowmein + Chilli Chicken", 130], ["Fried Rice + Chilli Chicken / Chilli Paneer", 190],
    ["Fried Rice + Chicken Kasa", 170]
  ];

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Render menu ---------- */
  var tabs = $("#menuTabs"), board = $("#menuBoard");
  function renderMenu(id) {
    var cat = MENU.filter(function (c) { return c.id === id; })[0];
    board.innerHTML = '<div class="menu-panel animating">' + cat.groups.map(function (g) {
      return '<div class="menu-group"><h3>' + g.title + "</h3>" + g.items.map(function (it) {
        return '<div class="menu-item"><div class="mi-row"><span class="mi-name"><span class="veg-dot' + (it[3] === N ? " nv" : "") + '"></span>' +
          it[0] + (it[4] ? ' <span class="mi-badge">' + it[4] + "</span>" : "") + '</span><span class="mi-dots"></span><span class="mi-price">₹' + it[2] +
          "</span></div>" + (it[1] ? '<div class="mi-desc">' + it[1] + "</div>" : "") + "</div>";
      }).join("") + "</div>";
    }).join("") + "</div>";
    $$(".tab", tabs).forEach(function (t) { t.classList.toggle("active", t.dataset.id === id); });
  }
  tabs.innerHTML = MENU.map(function (c) { return '<button class="tab" role="tab" data-id="' + c.id + '">' + c.label + "</button>"; }).join("");
  tabs.addEventListener("click", function (e) {
    var t = e.target.closest(".tab"); if (!t) return;
    renderMenu(t.dataset.id);
    t.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
  renderMenu("biryani");

  /* ---------- Render combos ---------- */
  $("#comboGrid").innerHTML = COMBOS.map(function (c, i) {
    return '<div class="combo-card' + (i % 3 === 0 ? " gold" : "") + '" data-reveal style="--d:' + ((i % 3) * 0.08) + 's">' +
      (c[2] ? '<span class="combo-hot">BEST</span>' : "") +
      '<span class="combo-no">' + (i + 1) + '</span><div class="combo-info"><small>Combo ' + (i + 1) + "</small><b>" + c[0] +
      '</b></div><span class="combo-price">₹' + c[1] + "</span></div>";
  }).join("");

  /* ---------- Preloader ---------- */
  var mbar = $(".mbar");
  function hideLoader() {
    $("#preloader").classList.add("done");
    document.body.classList.add("loaded");
    revealHero();
  }
  window.addEventListener("load", function () { setTimeout(hideLoader, 600); });
  setTimeout(hideLoader, 3500); // safety

  /* ---------- Reveal on scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  function observeAll() { $$("[data-reveal]:not(.in), #steps").forEach(function (el) { if (!el.closest(".hero")) io.observe(el); }); }
  function revealHero() { $$(".hero [data-reveal]").forEach(function (el) { el.classList.add("in"); }); }
  observeAll();

  /* ---------- Counters ---------- */
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target, end = +el.dataset.count, start = performance.now(), dur = 1600;
      (function tick(now) {
        var p = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * e);
        if (p < 1) requestAnimationFrame(tick);
      })(start);
      cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach(function (el) { cio.observe(el); });

  /* ---------- Nav, progress, active link ---------- */
  var nav = $("#nav"), burger = $("#burger"), prog = $("#scrollProgress"), toTop = $("#toTop");
  var links = $$(".nav-links a[href^='#']");
  var sections = links.map(function (a) { return $(a.getAttribute("href")); }).filter(Boolean);

  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    document.body.classList.toggle("no-scroll", open);
  });
  $$(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); document.body.classList.remove("no-scroll"); });
  });

  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 30);
    prog.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
    toTop.classList.toggle("show", y > 700);
    mbar.classList.toggle("show", y > 250);
    var cur = sections[0];
    sections.forEach(function (s) { if (s.offsetTop - 140 <= y) cur = s; });
    links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + cur.id); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- Floating spice particles ---------- */
  var SHAPES = [
    // star anise
    '<svg viewBox="0 0 40 40"><g fill="#b9832c">' + [0, 45, 90, 135, 180, 225, 270, 315].map(function (r) {
      return '<ellipse cx="20" cy="9" rx="4" ry="9" transform="rotate(' + r + ' 20 20)"/>';
    }).join("") + '<circle cx="20" cy="20" r="4" fill="#6e3a12"/></g></svg>',
    // rice grain
    '<svg viewBox="0 0 20 40"><ellipse cx="10" cy="20" rx="4" ry="15" fill="#f7ecd9"/></svg>',
    // cardamom
    '<svg viewBox="0 0 24 40"><ellipse cx="12" cy="20" rx="8" ry="16" fill="#7c9a3c"/><path d="M12 5v30" stroke="#5a7428" stroke-width="1.5"/></svg>',
    // leaf
    '<svg viewBox="0 0 40 40"><path d="M5 35C5 15 20 5 35 5 35 20 25 35 5 35z" fill="#3f8a4a"/><path d="M5 35L28 12" stroke="#2c6635" stroke-width="1.5"/></svg>',
    // saffron strand
    '<svg viewBox="0 0 10 40"><path d="M5 2q4 18 0 36" stroke="#e4573f" stroke-width="3" fill="none" stroke-linecap="round"/></svg>'
  ];
  var pc = $("#particles"), small = innerWidth < 640;
  var count = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (small ? 12 : 24);
  for (var i = 0; i < count; i++) {
    var p = document.createElement("span"), size = 10 + Math.random() * (small ? 14 : 22);
    p.className = "particle";
    p.innerHTML = SHAPES[i % SHAPES.length];
    p.style.cssText = "left:" + Math.random() * 100 + "%;width:" + size + "px;height:" + size + "px;animation-duration:" +
      (12 + Math.random() * 14) + "s;animation-delay:" + (-Math.random() * 20) + "s;--o:" + (0.35 + Math.random() * 0.45) +
      ";--r:" + (Math.random() > 0.5 ? 360 : -360) + "deg;filter:blur(" + (Math.random() > 0.7 ? 1.5 : 0) + "px)";
    pc.appendChild(p);
  }

  /* ---------- Desktop-only: parallax, tilt, cursor glow ---------- */
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var hv = $("#heroVisual"), layers = $$("[data-depth]", hv);
    $(".hero").addEventListener("mousemove", function (e) {
      var x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      layers.forEach(function (l) { var d = +l.dataset.depth; l.style.translate = (-x * d) + "px " + (-y * d) + "px"; });
    });
    $$("[data-tilt]").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(900px) rotateY(" + x * 10 + "deg) rotateX(" + -y * 10 + "deg) translateY(-6px)";
      });
      card.addEventListener("mouseleave", function () { card.style.transform = ""; });
    });
    var glow = $("#cursorGlow");
    window.addEventListener("mousemove", function (e) { glow.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)"; }, { passive: true });
  }

  $("#year").textContent = new Date().getFullYear();
})();
