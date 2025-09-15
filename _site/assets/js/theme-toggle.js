const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// 根据当前主题更新按钮图标
function setIcon() {
  if (html.getAttribute("data-theme") === "dark") {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

// 页面加载时应用上次选择的主题
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("site-theme");
  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
  } else if (!html.hasAttribute("data-theme")) {
    html.setAttribute("data-theme", "light");
  }
  setIcon();
});

// 点击切换主题
themeToggle.addEventListener("click", () => {
  const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("site-theme", newTheme); // 保存到 localStorage
  setIcon();
});
