"use strict";

const {
  db,
  models: { User, Instrument, Category, Brand, Lineitem, Order },
} = require("../server/db");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({
      username: "cody",
      password: "123",
      streetAddress: "123 Fake Street",
      city: "Springfield",
      state: "Oregon",
      zip: 94461,
      phone: "455-5555",
      email: "fake-email@gmail.com",
    }),
    User.create({
      username: "murphy",
      password: "123",
      streetAddress: "456 Real Drive",
      city: "Ordinary City",
      state: "Utah",
      zip: 65416,
      phone: "555-5665",
      email: "real-email@gmail.com",
    }),
    User.create({
      username: "susan",
      password: "123",
      streetAddress: "789 Real Street",
      city: "Strange City",
      state: "Ohio",
      zip: 51655,
      phone: "555-5669",
      email: "real-email43@gmail.com",
    }),
    User.create({
      username: "stanley",
      password: "123",
      streetAddress: "345 Text Street",
      city: "Ohoy",
      state: "Maine",
      zip: 12346,
      phone: "555-5615",
      email: "remasdasdail@gmail.com",
    }),
    User.create({
      username: "tigger",
      password: "123",
      streetAddress: "183 Why Here",
      city: "Weird Town",
      state: "New Jersey",
      zip: 54616,
      phone: "555-9513",
      email: "weird-email@gmail.com",
    }),
    User.create({
      username: "jianing",
      password: "123",
      isAdmin: true,
      email: "Admin@MusicRUs.com",
    }),
    User.create({
      username: "angel",
      password: "123",
      isAdmin: true,
      email: "Admin@MusicRUs.com",
    }),
    User.create({
      username: "robert",
      password: "123",
      isAdmin: true,
      email: "Admin@MusicRUs.com",
    }),
    User.create({
      username: "bharadwaj",
      password: "123",
      isAdmin: true,
      email: "Admin@MusicRUs.com",
    }),
  ]);

  const [Fender, Gibson, PRS, Jackson, Steinway, Yamaha, Knilling] =
    await Promise.all(
      [
        "Fender",
        "Gibson",
        "PRS",
        "Jackson",
        "Steinway",
        "Yamaha",
        "Knilling",
      ].map((brand) => {
        return Brand.create({ name: brand, image: brand + ".jpeg" });
      })
    );

  const [Guitar, Piano, Bass, Keyboard, Violin] = await Promise.all(
    ["Guitar", "Piano", "Bass", "Keyboard", "Violin"].map((category) => {
      return Category.create({
        name: category,
        image: category + ".jpeg",
        sound: category,
      });
    })
  );

  const instruments = await Promise.all([
    Instrument.create({
      categoryId: Guitar.id,
      name: "American Pro II Stratocaster",
      price: 1999,
      brandId: Fender.id,
      image: "strat1.jpg",
      description:
        "Fender's American Professional II Stratocaster offers multiple upgrades from its inaugural configuration. The lightweight, contoured body delivers a nicely balanced tonal foundation with a highly-resonant quality. This solidbody electric guitar's first major upgrade lies in the pickup selection. The American Professional II Stratocaster is loaded with a trio of V-Mod II single-coil pickups that pump out a vintage tone with modern refinements. An upgraded 2-point tremolo bridge and cold-rolled steel block combine to give you plenty of sustain and brightness. Further performance upgrades include a contoured heel joint, Super-Natural satin neck finish, and upgraded electronics. If you're looking for a guitar with a vintage voice and modern feel, the American Professional II Stratocaster is worth your consideration.",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      name: "Telecaster",
      price: 2999,
      brandId: Fender.id,
      image: "telecaster1.jpg",
      description:
        'Some folks think Telecasters are a twanging one-trick pony. They obviously never played a Fender Player Series Telecaster. Loaded with dual Alnico V single-coil pickups, the Fender Player Telecaster delivers everything from country twang to jazzy articulation to high-octane rock n roll — and anything in between. A modern "C"-shaped neck and 22-fret, 9.5-inch-radius fingerboard give you a decidedly contemporary feel with fast action and comfortable playability. You also get a synthetic bone nut, 6-saddle string-through bridge, and Fender standard sealed tuners. If you appreciate classic Telecaster tone but crave a more modern favor, pick up the Fender Player Series Telecaster. But be warned — you wont want to put it down.',
    }),
    Instrument.create({
      categoryId: Guitar.id,
      name: "Les Paul Standard",
      price: 3999,
      brandId: Gibson.id,
      image: "lesPaul1.jpg",
      description:
        "From its carved maple top to its stockpile of premium features, the Gibson Les Paul Standard ’50s is ready to rock. Burstbucker pickups and handwired electronics on this Gibson Les Paul Standard '50s deliver a massive tone arsenal. And you’ll enjoy effortless playability, courtesy of a satisfying vintage ’50s profile neck and fast-action rosewood fingerboard. If you’ve been wanting a modern Gibson Les Paul with a chunky neck feel and premium appointments, Music-R-Us has your axe. The Gibson Les Paul Standard ’50s is the guitar you’ve been waiting for",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      name: "Les Paul Custom",
      price: 4999,
      brandId: Gibson.id,
      image: "lesPaulCustom.jpg",
      description:
        "With its sonic punch, fluid playability, and classic “tuxedo” appointments, the Les Paul Custom is equal parts elegance and brute strength. Fitted with a matched 490/498 humbucker set that takes you from mellow jazz tones to full shred with a pinky twist, this majestic beast is ultra-responsive to your touch. Its fast-action neck, smooth-as-silk ebony fingerboard, and medium jumbo frets facilitate the speedy, dexterous fretwork we’ve heard across prog, fusion, and hard rock genres from guitar virtuosos like Robert Fripp, Al Di Meola, and Zakk Wylde. Gibson’s Custom Shop luthiers selected premium mahogany for the body and capped it with a 2-piece carved maple top — a classic recipe for rich, sustaining, articulate tone that’ll slice right through the mix.",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      name: "Les Paul 1960 Reissue ",
      price: 5999,
      brandId: Gibson.id,
      image: "lesPaul60.jpg",
      description:
        "From its carved maple top to its stockpile of premium features, the Gibson Les Paul Standard ’60s is ready to rock. Burstbucker 61 pickups and handwired electronics deliver a massive tone arsenal. And you’ll enjoy effortless playability courtesy of a fast SlimTaper-profile neck and silky-smooth rosewood fingerboard with Plek’d frets. If you’ve been wanting a modern Les Paul with a slinky ’60s feel and premium appointments, Music-R-Us has your axe. The Gibson Les Paul Standard ’60s is the guitar you’ve been waiting for.",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      name: "Les Paul Classic",
      price: 4999,
      brandId: Gibson.id,
      image: "lesPaulClassic.jpg",
      description:
        "From its carved maple top and eye-popping custom nitro finish to its stockpile of premium appointments, this Music-R-Us Exclusive Gibson Les Paul Classic is ready to rock. Burstbucker pickups with coil-splitting and polarity switching deliver a massive tone arsenal. And you’ll enjoy effortless playability, courtesy of a fast SlimTaper profile neck and silky-smooth rosewood fingerboard with Plek’d frets. If you’ve been wanting a modern Les Paul with a slinky ’60s feel and custom electronics, we’ve got your axe. The Gibson Les Paul Classic is the guitar you’ve been waiting for. It’s a limited edition and only available at Music-R-Us — so you’d better reserve yours while you can!",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      category: "Guitar",
      name: "Custom-24",
      price: 3999,
      brandId: PRS.id,
      image: "prsCu24.jpg",
      description:
        "The PRS Custom 24-08 10-Top retains the foundations of the original Custom — such as the maple top, mahogany body and neck, 24 frets, and 25-inch scale — while adding modern features to expand its tonal versatility. Each Custom 24-08 is capped with an exquisitely carved maple 10-Top, a symbol of PRS’s timeless quality and splendor. A pair of 85/15 humbuckers imbue the Custom 24-08 with classic sounds, with onboard mini-toggle coil-tap switches and a 3-way toggle outputting eight different pickup tones. For many years, Music-R-Us guitarists have praised the PRS Gen III bridge’s capabilities, which pairs tremolo expression with the stability and sturdiness of a hardtail. Paul Reed Smith and company continue to raise the bar with the PRS Custom 24-08 10-Top, combining endless playability and incredible sound with stylish looks to produce a well-rounded instrument worthy of generations of playing.",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      name: "Custom-22",
      price: 12999,
      brandId: PRS.id,
      image: "prsCu22.jpg",
      description:
        "Playing your favorite licks through the PRS S2 Standard 22's covered 58/15 S pickups is a wonderful experience. That's because 58/15 S pickups are modeled after the 58/15 pickups Paul Reed Smith designed for PRS’s 30th Anniversary. From shimmering cleans to blistering high-gain tones, the clarity and extended tonal range provided by these pickups make the S2 Standard 22 the ideal workhorse guitar. A push-pull tone pot further fortifies your sonic arsenal with a range of spanky single-coil tones. At Music-R-Us, we love the sweetened, vintage-inspired sound of 58/15 S humbuckers.",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      name: "Soloist",
      price: 7999,
      brandId: Jackson.id,
      image: "jacksonSoloist.jpg",
      description:
        "The Jackson Pro Series Soloist SL2Q MAH electric guitar is a modern rock-and-metal player’s dream. Its oiled maple neck and all-duty compound-radius ebony fingerboard will give you the freedom to explore new heights and plumb new depths of high-gain glory. Onboard Seymour Duncan Distortion pickups kick out smoking-hot midrange clarity, as well as lower-end growl and bite. And a Floyd Rose 1000 double-locking tremolo equips the Soloist SL2Q MAH with some serious dive-bombing potential. Topped with eye-catching gold hardware, the Jackson Pro Soloist SL2Q MAH is as gig-ready as they come. Guitarists here at Music-R-Us love the sound and feel of the Jackson Pro Soloist SL2Q MAH, and we’re confident that discerning players from all genres will too.",
    }),
    Instrument.create({
      categoryId: Piano.id,
      name: "Baby-Grand",
      price: 9199,
      brandId: Steinway.id,
      image: "babygrand.jpg",
      desscription:
        "At 5foot1inches (155 cm), this piano is the smallest of the Steinway grands. This design was introduced in the 1930s to invite the majesty of the Steinway sound into almost any space.",
    }),
    Instrument.create({
      categoryId: Bass.id,
      name: "Jazz-Bass",
      price: 1999,
      brandId: Fender.id,
      image: "jazzBass.jpg",
      description:
        "The American Ultra neckplate graces Fender’s top-of-the-line production instruments — their most advanced series of guitars and basses for discerning players who demand the ultimate in precision, performance, and tone. The Fender American Ultra Jazz Bass delivers the same iconic vintage vibe and visuals as its ancestors. But play a few notes and you’ll quickly realize that this is a state-of-the-art, high-performance axe. The contoured offset alder body balances beautifully and always feels just right; while the fast, slim Modern D neck profile, compound-radius fingerboard, and tapered neck heel turbocharge your playing. Amazing-sounding Fender Ultra Noiseless Vintage Jazz Bass pickups and active 3-band electronics complete the setup.",
    }),
    Instrument.create({
      categoryId: Bass.id,
      name: "P-Bass",
      price: 599,
      brandId: Fender.id,
      image: "pBass.jpg",
      description:
        "Leo Fender nailed the essence of a great instrument when he launched his Precision Bass in 1951. Today, the Fender American Professional II Precision Bass draws on over six decades of innovation, evolution, and inspiration to exceed the requirements of today’s working bassists. The ’63 C-profile neck feels just right, with its smooth, rolled fingerboard edges, “Super-Natural” satin finish, and newly sculpted neck heel that gives you effortless access to the upper register. Fender’s new V-Mod II Precision Bass split-coil pickup serves up classic P Bass punch and growl, with more articulation than ever before. A genuine bone nut and string-through-body or top-load 4-saddle HiMass Vintage bridge deliver solidity and sustain for authoritative tone, while lightweight vintage-style tuners with tapered shafts provide outstanding tuning stability and fast, hassle-free string changes. Rocking premium appointments, flawless playability, optimized electronics, and classic visuals, the Fender American Professional II Precision Bass offers you a new standard of comfort, tone, and performance.",
    }),
    Instrument.create({
      categoryId: Bass.id,
      name: "SG Standard Bass",
      price: 9599,
      brandId: Gibson.id,
      image: "sgBass.jpg",
      description:
        "The short scale length of the Gibson SG Standard Bass is perfect for the fat, full thump that made this one of the most prized vintage designs out there. A lot of that warmth is thanks to the mahogany body and neck. The SG Bass is also perfect for any style of gig, thanks to its pair of versatile humbucking pickups. The super-comfortable 30-inch scale makes playing this bass a breeze. Whether you need a smaller-size bass or want a bass that recalls rock ’n’ roll’s glory days, you should check out the Gibson SG Standard Bass.",
    }),
    Instrument.create({
      categoryId: Bass.id,
      name: "Thunderbird Bass",
      price: 1999,
      brandId: Gibson.id,
      image: "tBass.jpg",
      description:
        "Far from just a clever name, the Gibson Thunderbird 4-string bass possesses plenty of thunderous power and long-lasting reliability — all in a vintage-looking instrument. At its core sits a mahogany body and neck capped with an Indian rosewood fingerboard, the perfect recipe for bellowing bass and pro-quality performance. A pair of humbuckers produce plenty of classic Thunderbird tone with enough juice to push your amp into saturated oblivion, tweakable via individual volume knobs and a handy master tone control. For an added dose of vintage flair, the Thunderbird is finished in beautiful nitrocellulose lacquer, a Music-R-Us favorite for its sharp looks and ability to bring out even more tone from an instrument's woods.",
    }),
    Instrument.create({
      categoryId: Piano.id,
      name: "Model D",
      price: 799,
      brandId: Steinway.id,
      image: "modelD.jpg",
      description:
        "The modern Model D measures 8'11¾“ in length, and 61¼“ in width. Out of seven basic sizes of Steinway Grands, the Model D is by far the largest. Providing the highest level of percussive musical expression, these beautiful instruments are the stuff of legend.",
    }),
    Instrument.create({
      categoryId: Piano.id,
      name: "Model B",
      price: 21999,
      brandId: Steinway.id,
      image: "modelB.jpg",
      description:
        "The Steinway Model B is often called “the perfect piano” and for good reason. It is considered a near-perfect blend of size, power, and overall versatility making this instrument a solid choice for anywhere from an intimate setting, a teaching studio, or a huge concert venue.",
    }),
    Instrument.create({
      categoryId: Piano.id,
      name: "Model A",
      price: 91299,
      brandId: Steinway.id,
      image: "modelA.jpg",
      description:
        "Salon Grand. At 6ft2inches (188 cm), the Model A is known for delivering a “grand” sound in a medium-scale instrument. This grand offers power and warmth, with a design that allows the solid spruce soundboard to freely and efficiently resonate, like its larger counterparts.",
    }),
    Instrument.create({
      categoryId: Piano.id,
      name: "Model O",
      price: 31999,
      brandId: Steinway.id,
      image: "modelO.jpg",
      description:
        "Living Room Grand. At 5' 10¾ (180 cm), the Model O is the largest of Steinway's “small grands.” This piano is large enough to satisfy those who demand a full, rich sound, yet sized to fit in almost any home.",
    }),
    Instrument.create({
      categoryId: Piano.id,
      name: "Model M",
      price: 12999,
      brandId: Steinway.id,
      image: "modelM.jpg",
      description:
        "The Steinway Grand Piano Model M is a medium grand piano that is great for conservatories and many homes. Designed by Steinway, the piano delivers a rich tone, is responsive in action, and is a manageable size. The Steinway Grand Piano Model M has an overall width of 57.75” (147 cm) and length of 67” (170 cm)",
    }),
    Instrument.create({
      categoryId: Piano.id,
      name: "Model S",
      price: 312999,
      brandId: Steinway.id,
      image: "modelS.jpg",
      description:
        "The smallest of all studio grands, the Steinway Model S measures just over 5 feet in length and is the go-to choice for confined spaces. Often referred to as the “city grand” for its compact size, the Model S affords nearly any space the grandeur of a Steinway piano.  Without losing the grand piano action, pianists can enjoy the quality of sound and craftsmanship characteristic of all Steinway pianos when sitting down to play the Model S.",
    }),
    Instrument.create({
      categoryId: Piano.id,
      name: "SPIRIO",
      price: 44999,
      brandId: Steinway.id,
      image: "spirio.jpg",
      description:
        "The Steinway & Sons Spirio is the world's finest high resolution player piano. A masterpiece of artistry and engineering in your home, Spirio enables you to enjoy performances played by great pianists — captured with such nuance, power and passion that they are utterly indistinguishable from a live performance.",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      name: "Pro Series Jeff Loomis",
      price: 999,
      brandId: Jackson.id,
      image: "Loomis.jpg",
      description:
        "Arch Enemy, Nevermore, Alcatrazz: not many guitarists have a heavy metal résumé as impressive as Jeff Loomis, so it’s high praise for him to adorn his name on Jackson’s Pro Series Jeff Loomis Signature Soloist SL7. This axe’s lightweight basswood body boasts a sandblasted bound ash top — an aggressive and utilitarian look that matches the simplified control scheme. A pair of Jeff’s signature Blackout pickups delivers all the crunch and grit that’s he’s famous for. Music-R-Us guitarists find that the articulate and in-your-face tone of these pickups give an amazingly clear definition to this Soloist's extended 7-string range. Finally, a Floyd Rose FRT-O1500 tremolo provides this guitar with stage-ready tuning stability, even with heavy vibrato use and flurries of dive-bombs!",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      name: "Pro Series Rhandy Rhoads",
      price: 1999,
      brandId: Jackson.id,
      image: "RR.jpg",
      description:
        "The Jackson Select Series RR1 Rhoads solidbody electric guitar brings you the style, tone, and ultra-fast playability of a legendary guitar design! Following in the footsteps of the original Randy Rhoads (the first Jackson produced), the Select Series RR1 Rhoads features a distinctively aggressive V body design, with a fast, comfortable maple neck that's topped with an ebony fingerboard. It also includes cool black hardware, a very stable low-profile, double-locking trem bridge, and two Seymour Duncan humbucking pickups with plenty of output. When you want to make a statement onstage or in the studio, do it with the RR1 Rhoads!",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      name: "Pro Series King V",
      price: 2999,
      brandId: Jackson.id,
      image: "kingV.jpg",
      description:
        "For visual ferocity it's hard to beat the sharp lines of Jackson's King V body style, and the Jackson JS32 King V delivers that confrontational look at a value-packed price. It serves up thick, snarling tone and prodigious sustain, courtesy of its resonant, lightweight poplar body and two high-output humbuckers. You'll appreciate the smooth playability of the maple speed neck. And the fully bound compound-radius fretboard is great for chording down low, and bending up high without fretting out. A real Floyd Rose licensed double-locking tremolo bridge completes the package, making the Jackson JS32 King V a guitar any serious player can love.",
    }),
    Instrument.create({
      categoryId: Bass.id,
      name: "David Ellefson Signature Model",
      price: 999,
      brandId: Jackson.id,
      image: "des.jpg",
      description:
        "Jackson designed and built the David Ellefson CBX IV Signature Series Bass to the Megadeth co-founder's exacting specifications. Contoured for extreme comfort, the instrument gives you effortless access to upper registers. Jackson's HiMass bridge delivers quick attack and robust sustain, while keeping intact your bass tone fundamental. The pickups, deployed in the neck and bridge positions, are active EMG HZ35 humbuckers; they serve up fat, punchy sound that cuts right through any mix.  Music-R-Us bassists dig the Jackson David Ellefson CBX IV. We think you will, too.",
    }),
    Instrument.create({
      categoryId: Bass.id,
      name: "X Series",
      price: 12999,
      brandId: Jackson.id,
      image: "x.jpg",
      description:
        "With its high-quality construction and full-throttle sound, the Jackson X Series Concert Bass CBXNT DX IV is perfect for use across a variety of genres. A classic set of P/J pickups produce a muscular and rich bass tone, which is tweakable with an onboard 3-band EQ. A graphite-reinforced Jackson Speed maple neck with compound-radius laurel fingerboard marries sturdy construction with light-speed playability, perfect for sliding your fingers effortlessly up and down the bass’s 24 frets. Plus, a Jackson Bass Bacher IV string-through-body hardtail bridge delivers a rapid attack and robust sustain, the perfect accent to round out this heavy-duty workhorse.",
    }),
    Instrument.create({
      categoryId: Bass.id,
      name: "JS3",
      price: 999,
      brandId: Jackson.id,
      image: "js3.jpg",
      description:
        "The Jackson JS Series Spectra Bass JS3V packs plenty of punch — and sleek looks to boot — with its poplar body, maple neck, and active humbucking pickups. Upgraded with a HiMass bridge, two Jackson active humbuckers, and coil-split circuitry, the Spectra Bass JS3V makes it easy to dial in the perfect tone for any gig or recording session. And for a commanding feel, the thin “U” profile neck is topped with a smooth compound-radius laurel fingerboard and jumbo frets for effortless playability, with the added range of a tight and responsive low B — courtesy of the instrument’s 35-inch scale length. If you’re looking for a seriously gigable 5-string bass at a great price, look no further than the Jackson JS Series Spectra Bass JS3V.",
    }),
    Instrument.create({
      categoryId: Violin.id,
      name: "AV-10",
      price: 999,
      brandId: Yamaha.id,
      image: "av10.jpg",
    }),

    Instrument.create({
      categoryId: Violin.id,
      name: "YEV105 Electric Violin",
      price: 1745,
      brandId: Yamaha.id,
      image: "yamahaViolin4.jpg",
      description:
        "The Yamaha YEV105 offers a sublime combination of organic beauty and transcendent playability. Five layers comprised of maple, mahogany, and spruce yield a gorgeous natural sound, while an oil-finished walnut frame enhances its looks, strength, and resonance. A high-output passive bridge pickup captures every ounce of the YEV105’s natural tone, meticulously reproducing the instrument’s dynamic response and highlighting the subtle nuances of your bowing.",
    }),
    Instrument.create({
      categoryId: Violin.id,
      name: "YSV104 Electric Violin",
      price: 12846,
      brandId: Yamaha.id,
      image: "yamahaViolin1.jpg",
      description:
        "The YSV104 Silent Series Violin reproduces the body resonance, sound, and ambience of an acoustic violin, thanks to Yamaha’s SRT (Studio Response Technology). This electric violin’s innovative design not only offers a state-of-the-art look, it also provides a feel that makes switching over from a traditional acoustic violin effortless. Its streamlined control box includes an aux input for play-along practice and onboard reverb to enhance your playing enjoyment. The Yamaha YSV104 is ideal for anyone who wants to practice quietly without sacrificing natural acoustic tone.",
    }),
    Instrument.create({
      categoryId: Violin.id,
      name: "86F Nicolo Gabrieli Maestro",
      price: 4949,
      brandId: Knilling.id,
      image: "yamahaViolin3.jpeg",
      description:
        "The Knilling 86F Nicolo Gabrieli Maestro Violin represents the pinnacle of Knilling's craftsmanship, and their passion for building superior instruments is evident as soon as you open the case. The Nicolo Gabrieli series of instruments use premium European tonewoods, sourced from regions prized by luthiers ever since the days of Stradivari. Your reward is world-class tonal balance, response, and projection, creating an expressive instrument that will translate every nuance of your technique. Combining some of the finest tonewoods in the world with masterful craftsmanship and attention to detail, Sweetwater is sure the Knilling 86F Nicolo Gabrieli Maestro Violin will exceed your expectations.",
    }),
    Instrument.create({
      categoryId: Violin.id,
      name: "110VN Sebastian",
      price: 3949,
      brandId: Knilling.id,
      image: "knilling2img.jpeg",
      description:
        "The Knilling 10VN Sebastian Series Violin represents the pinnacle of Knilling's craftsmanship, and their passion for building superior instruments is evident as soon as you open the case. The Nicolo Gabrieli series of instruments use premium European tonewoods, sourced from regions prized by luthiers ever since the days of Stradivari. Your reward is world-class tonal balance, response, and projection, creating an expressive instrument that will translate every nuance of your technique. Combining some of the finest tonewoods in the world with masterful craftsmanship and attention to detail, Sweetwater is sure the Knilling 86F Nicolo Gabrieli Maestro Violin will exceed your expectations.",
    }),
    Instrument.create({
      categoryId: Violin.id,
      name: "4K Bucharest",
      price: 3949,
      brandId: Knilling.id,
      image: "knilling2img.jpeg",
      description:
        "The Knilling 4K Bucharest Violin represents the pinnacle of Knilling's craftsmanship, and their passion for building superior instruments is evident as soon as you open the case. The Nicolo Gabrieli series of instruments use premium European tonewoods, sourced from regions prized by luthiers ever since the days of Stradivari. Your reward is world-class tonal balance, response, and projection, creating an expressive instrument that will translate every nuance of your technique. Combining some of the finest tonewoods in the world with masterful craftsmanship and attention to detail, Sweetwater is sure the Knilling 86F Nicolo Gabrieli Maestro Violin will exceed your expectations.",
    }),
    Instrument.create({
      categoryId: Violin.id,
      name: "Perfection II",
      price: 3949,
      brandId: Knilling.id,
      image: "knilling2img.jpeg",
      description:
        "The Knilling Perfection II Violin represents the pinnacle of Knilling's craftsmanship, and their passion for building superior instruments is evident as soon as you open the case. The Nicolo Gabrieli series of instruments use premium European tonewoods, sourced from regions prized by luthiers ever since the days of Stradivari. Your reward is world-class tonal balance, response, and projection, creating an expressive instrument that will translate every nuance of your technique. Combining some of the finest tonewoods in the world with masterful craftsmanship and attention to detail, Sweetwater is sure the Knilling 86F Nicolo Gabrieli Maestro Violin will exceed your expectations.",
    }),
    Instrument.create({
      categoryId: Keyboard.id,
      name: "P-125 Digital Piano",
      price: 7000,
      brandId: Yamaha.id,
      image: "keyboard1.jpg",
      description:
        "Built around the sound of the world-famous Yamaha CFIIIS concert grand piano, the clear and melodic sound of the Yamaha P-125 digital piano is instantly recognizable to any seasoned pianist. Your fingers will feel right at home on the P-125’s Graded Hammer Standard action, which is heavier in the low keys and lighter in the high keys, emulating the dynamic feel of hammers on real acoustic piano strings",
    }),
    Instrument.create({
      categoryId: Keyboard.id,
      name: "Roland K-25m Portable Keyboard",
      price: 5000,
      brandId: Yamaha.id,
      image: "keyboard2.jpg",
      description:
        "The Roland K-25m is a 25-key, velocity sensitive keyboard designed for use with the Roland Boutique series. Measuring less than 12″ across, the K-25m acts as a dock for any Roland Boutique module, and once in place the module can be tilted at two different angles for easier viewing and sound programming, or can be laid completely flat. The compact keyboard can also address a range from -4 to +5 octaves when used with the relevant module.",
    }),
    Instrument.create({
      categoryId: Keyboard.id,
      name: "PSR-EW425",
      price: 5999,
      brandId: Yamaha.id,
      image: "keyboard3.jpg",
      description:
        "The Roland K-25m is a 25-key, velocity sensitive keyboard designed for use with the Roland Boutique series. Measuring less than 12″ across, the K-25m acts as a dock for any Roland Boutique module, and once in place the module can be tilted at two different angles for easier viewing and sound programming, or can be laid completely flat. The compact keyboard can also address a range from -4 to +5 octaves when used with the relevant module.",
    }),
    Instrument.create({
      categoryId: Keyboard.id,
      name: "PSR-I500",
      price: 5000,
      brandId: Yamaha.id,
      image: "keyboard4.jpg",
      description:
        "The Roland K-25m is a 25-key, velocity sensitive keyboard designed for use with the Roland Boutique series. Measuring less than 12″ across, the K-25m acts as a dock for any Roland Boutique module, and once in place the module can be tilted at two different angles for easier viewing and sound programming, or can be laid completely flat. The compact keyboard can also address a range from -4 to +5 octaves when used with the relevant module.",
    }),
    Instrument.create({
      categoryId: Guitar.id,
      category: "Guitar",
      name: "PRS SE Silver Sky",
      price: 3999,
      brandId: PRS.id,
      image: "prsSilver.jpg",
      description:
        "With the release of the SE Silver Sky, PRS has kept the modern design aesthetic, tone and feel of the original model and made it accessible to more guitar players, from beginner to professional. I couldn’t be happier it with it, said John Mayer. At the heart of the instrument are the three single-coil pickups, which were meticulously designed to capture the voicing of the original Silver Sky. The 635JM “S” pickups capture the same round, full tone with musical high end that is never too harsh and add a bit of a bite. This guitar is anchored by a two-point steel tremolo, synthetic bone nut, and vintage-style tuners. Other design features include the PRS Silver Sky inverted headstock shape and the PRS double-acting truss rod (accessible from the front of the headstock for ease of use). This instrument ships with PRS Classic 10-46 strings and a PRS SE gig bag.",
    }),
  ]);

  const orders = await Promise.all([
    Order.create({ userId: 1, isCart: true }),
    Order.create({ userId: 1 }),
    Order.create({ userId: 1 }),
    Order.create({ userId: 1 }),
    Order.create({ userId: 2, isCart: true }),
    Order.create({ userId: 2 }),
    Order.create({ userId: 2 }),
    Order.create({ userId: 2 }),
    Order.create({ userId: 2 }),
    Order.create({ userId: 2 }),
    Order.create({ userId: 3, isCart: true }),
    Order.create({ userId: 3 }),
    Order.create({ userId: 3 }),
    Order.create({ userId: 3 }),
    Order.create({ userId: 4, isCart: true }),
    Order.create({ userId: 4 }),
    Order.create({ userId: 4 }),
    Order.create({ userId: 4 }),
    Order.create({ userId: 4 }),
    Order.create({ userId: 5, isCart: true }),
    Order.create({ userId: 5 }),
    Order.create({ userId: 5 }),
    Order.create({ userId: 5 }),
    Order.create({ userId: 5 }),
    Order.create({ userId: 6, isCart: true }),
    Order.create({ userId: 6 }),
    Order.create({ userId: 6 }),
    Order.create({ userId: 6 }),
    Order.create({ userId: 6 }),
    Order.create({ userId: 7, isCart: true }),
    Order.create({ userId: 7 }),
    Order.create({ userId: 7 }),
    Order.create({ userId: 7 }),
    Order.create({ userId: 7 }),
    Order.create({ userId: 8, isCart: true }),
    Order.create({ userId: 8 }),
    Order.create({ userId: 8 }),
    Order.create({ userId: 8 }),
    Order.create({ userId: 8 }),
    Order.create({ userId: 9, isCart: true }),
    Order.create({ userId: 9 }),
    Order.create({ userId: 9 }),
    Order.create({ userId: 9 }),
    Order.create({ userId: 9 }),
  ]);

  const randomOrderId = (orders) => {
    return orders[Math.floor(Math.random() * orders.length)].id;
  };
  const randomInstrumentId = (instruments) => {
    return instruments[Math.floor(Math.random() * instruments.length)].id;
  };
  const randomQuantity = () => {
    return Math.ceil(Math.random() * 10);
  };

  const lineitems = await Promise.all(
    Array(100)
      .fill("")
      .map((__) => {
        return Lineitem.create({
          quantity: randomQuantity(),
          instrumentId: randomInstrumentId(instruments),
          orderId: randomOrderId(orders),
        });
      })
  );

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
