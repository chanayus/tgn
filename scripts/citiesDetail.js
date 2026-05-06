const initMobileNavDropdown = () => {
	const aside = document.querySelector(".cities-nav");
	const toggle = aside?.querySelector(".cities-nav-toggle");
	const toggleLabel = toggle?.querySelector("span");
	const navLinks = Array.from(aside?.querySelectorAll("a[data-section]") ?? []);
	const desktopQuery = window.matchMedia("(min-width: 64rem)");

	if (!aside || !toggle || !toggleLabel || navLinks.length === 0) {
		return () => {};
	}

	const syncDropdownState = () => {
		if (desktopQuery.matches) {
			aside.classList.remove("is-open");
			toggle.setAttribute("aria-expanded", "false");
		}
	};

	const updateToggleLabel = (activeLink = aside.querySelector("a.active")) => {
		toggleLabel.textContent = activeLink?.textContent.trim() || "Explore this city";
	};

	toggle.addEventListener("click", () => {
		if (desktopQuery.matches) {
			return;
		}

		const isOpen = aside.classList.toggle("is-open");
		toggle.setAttribute("aria-expanded", String(isOpen));
	});

	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			updateToggleLabel(link);
			syncDropdownState();
		});
	});

	desktopQuery.addEventListener("change", syncDropdownState);
	updateToggleLabel();
	return updateToggleLabel;
};

const initSectionObserver = (onActiveChange = () => {}) => {
	const article = document.querySelector("article");
	const navLinks = Array.from(document.querySelectorAll("aside a[data-section]"));

	if (!article || navLinks.length === 0) {
		return;
	}

	const sections = Array.from(article.querySelectorAll("section[id]"));
	const sectionIds = new Set(sections.map((section) => section.id));
	const linkedNavItems = navLinks.filter((link) => sectionIds.has(link.dataset.section));

	if (linkedNavItems.length === 0) {
		return;
	}

	const setActiveLink = (sectionId) => {
		linkedNavItems.forEach((link) => {
			link.classList.toggle("active", link.dataset.section === sectionId);
		});

		onActiveChange(linkedNavItems.find((link) => link.dataset.section === sectionId));
	};

	const getCurrentSectionId = () => {
		const viewportAnchor = window.innerHeight * 0.35;
		let currentSection = sections[0];

		sections.forEach((section) => {
			if (section.getBoundingClientRect().top <= viewportAnchor) {
				currentSection = section;
			}
		});

		return currentSection?.id;
	};

	const updateActiveLink = () => {
		const activeSectionId = getCurrentSectionId();

		if (activeSectionId) {
			setActiveLink(activeSectionId);
		}
	};

	const observer = new IntersectionObserver(
		() => {
			updateActiveLink();
		},
		{
			root: null,
			rootMargin: "-20% 0px -55% 0px",
			threshold: [0, 0.25, 0.5, 0.75],
		},
	);

	sections.forEach((section) => {
		if (sectionIds.has(section.id)) {
			observer.observe(section);
		}
	});

	updateActiveLink();
};

const updateDropdownLabel = initMobileNavDropdown();

initSectionObserver(updateDropdownLabel);
