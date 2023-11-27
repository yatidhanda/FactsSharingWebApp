const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//console.log(CATEGORIES.find((el) => el.name == "society"));
//SELECTING DOM ELEMENTS
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".form-fact");
const FactsList = document.querySelector(".facts-list");

// CREATING DOM ELMENTS:RENDER FACTS IN LIST
FactsList.innerHTML = "";

//loading and fetching data with supabase
LoadFacts();
async function LoadFacts() {
  const res = await fetch(
    "https://mpqxwuxxetfkoyyqiazc.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcXh3dXh4ZXRma295eXFpYXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNjQ1NTUsImV4cCI6MjAxMzY0MDU1NX0.ikrZIHPy8td-uyyBMf_OQ3j7sgAJYYr3H0HJZeL8Ke4",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcXh3dXh4ZXRma295eXFpYXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNjQ1NTUsImV4cCI6MjAxMzY0MDU1NX0.ikrZIHPy8td-uyyBMf_OQ3j7sgAJYYr3H0HJZeL8Ke4",
      },
    }
  );
  const data = await res.json();
  //console.log(data);
  // const filtereddata = data.filter((fact) => fact.category == "society");
  createfactslist(data);
}

// createfactslist(initialFacts);

function createfactslist(dataarray) {
  const htmlarr = dataarray.map(
    (fact) => ` <li class="fact"> 
  <p>
  ${fact.fact}
            <a class="source" href=${fact.source} target="_blank">
                 (source) 
                </a>
  </p>
 
  
              <span class="tag" style="background-color: ${ CATEGORIES.find((el) => el.name == fact.category).color} ">   ${fact.category}  </span>

  </li>`
  );

  const html = htmlarr.join("");
  // console.log(htmlarr);
  FactsList.insertAdjacentHTML("afterbegin", html);
}

//TOGGLE FORM VISIBILTY
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share A Fact";
  }
});

//console.log(CATEGORIES.find((el) => el.name == "society").color);
