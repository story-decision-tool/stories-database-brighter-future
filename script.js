const stories = [
  {
    title: "Communicative Systems Can Make or Mar!",
    language: "English",
    region: "Africa",
    type: "Impact",
    storyteller: "Nange Lizette",
    bio: "Nange Lizette is a storyteller and health advocate working with eBASE Africa.",
    content: "From the grassfields of Cameroon, this story details a powerful journey to improve childhood vaccination rates through communication audits and evidence-based practices.",
    audio: "",
    date: "2025-07-17"
  },
  {
    title: "Guiding Light: A Journey to Safe Childbirth in Crisis",
    language: "English",
    region: "Africa",
    type: "Narrative",
    storyteller: "Jumwoh Miguel",
    bio: "Jumwoh is a community-based storyteller affiliated with eBASE Africa.",
    content: "A community's response to maternal health challenges through storytelling, technology, and trusted local champions.",
    audio: "",
    date: "2025-07-17"
  },
  {
    title: "The Power of Trust: Rewriting Childbirth in Rural Africa",
    language: "English",
    region: "Africa",
    type: "Impact",
    storyteller: "Fonjand Mekano Chia",
    bio: "Chia is a public health storyteller affiliated with eBASE Africa.",
    content: "How collaboration, trust-building and evidence-based interventions improved maternal care in rural Cameroon.",
    audio: "",
    date: "2025-07-17"
  }
];

function renderStories(data) {
  const storyList = document.getElementById("storyList");
  storyList.innerHTML = "";
  data.forEach(story => {
    const card = document.createElement("div");
    card.className = "story-card";
    card.innerHTML = `
      <h2>${story.title}</h2>
      <p class="meta">By ${story.storyteller} (${story.bio})<br/>${story.language} | ${story.region} | ${story.type} | ${story.date}</p>
      <p>${story.content}</p>
      ${story.audio ? `<audio controls src="${story.audio}"></audio>` : ""}
      <div class="interactions">
        <button>❤️ Like</button>
        <button>⭐ Rate</button>
        <button>💬 Comment</button>
        <button>🔗 Share</button>
      </div>
    `;
    storyList.appendChild(card);
  });
}

function filterStories() {
  const lang = document.getElementById("languageSelect").value;
  const reg = document.getElementById("regionSelect").value;
  const typ = document.getElementById("typeSelect").value;
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filtered = stories.filter(s =>
    (lang === "all" || s.language === lang) &&
    (reg === "all" || s.region === reg) &&
    (typ === "all" || s.type === typ) &&
    (s.title.toLowerCase().includes(query) || s.content.toLowerCase().includes(query))
  );

  renderStories(filtered);
}

document.getElementById("languageSelect").addEventListener("change", filterStories);
document.getElementById("regionSelect").addEventListener("change", filterStories);
document.getElementById("typeSelect").addEventListener("change", filterStories);
document.getElementById("searchInput").addEventListener("input", filterStories);

renderStories(stories);
