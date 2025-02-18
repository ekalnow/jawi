document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 50,
    });

    // Menu data with bilingual support
    const menuData = {
        'Appetizers - المقبلات': [
            {
                name: 'Gado Gado',
                arabic: 'جادو جادو',
                description: 'Traditional Indonesian salad with peanut sauce',
                arabicDescription: 'سلطة جاوية تقليدية مع صلصة الفول السوداني',
                price: '18'
            },
            {
                name: 'Spring Rolls',
                arabic: 'سبرينج رول',
                description: 'Crispy rolls filled with vegetables',
                arabicDescription: 'لفائف مقرمشة محشوة بالخضار',
                price: '15'
            }
        ],
        'Main Course - الأطباق الرئيسية': [
            {
                name: 'Nasi Goreng',
                arabic: 'ناسي جورينج',
                description: 'Indonesian fried rice with chicken and shrimp',
                arabicDescription: 'أرز مقلي جاوي مع الدجاج والروبيان',
                price: '29'
            },
            {
                name: 'Beef Rendang',
                arabic: 'رندانج لحم',
                description: 'Slow-cooked beef in Indonesian spices',
                arabicDescription: 'لحم بقري مطهو ببطء مع التوابل الجاوية',
                price: '45'
            }
        ],
        'Drinks - المشروبات': [
            {
                name: 'Es Teh',
                arabic: 'إس تيه',
                description: 'Indonesian iced tea',
                arabicDescription: 'شاي مثلج جاوي',
                price: '12'
            },
            {
                name: 'Avocado Juice',
                arabic: 'عصير الأفوكادو',
                description: 'Fresh avocado juice with chocolate',
                arabicDescription: 'عصير أفوكادو طازج مع الشوكولاتة',
                price: '16'
            }
        ]
    };

    // Language switching functionality
    let currentLang = 'ar';

    // Language switch buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                currentLang = lang;
                document.documentElement.lang = lang;
                document.body.classList.toggle('rtl', lang === 'ar');
                updateContent();
                
                // Update active state of language buttons
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Menu filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuSection = document.querySelector('.menu-categories');

    function updateContent() {
        // Hide all language-specific elements except language buttons
        document.querySelectorAll('[data-lang]').forEach(el => {
            if (!el.classList.contains('lang-btn')) {
                el.style.display = 'none';
            }
        });

        // Show elements for current language except language buttons
        document.querySelectorAll(`[data-lang="${currentLang}"]`).forEach(el => {
            if (!el.classList.contains('lang-btn')) {
                el.style.display = '';
            }
        });

        // Update menu filter buttons
        const menuTranslations = {
            ar: {
                all: 'الكل',
                appetizers: 'المقبلات',
                main: 'الأطباق الرئيسية',
                drinks: 'المشروبات'
            },
            en: {
                all: 'All',
                appetizers: 'Appetizers',
                main: 'Main Course',
                drinks: 'Drinks'
            }
        };

        // Update navigation links
        const navTranslations = {
            ar: {
                home: 'الرئيسية',
                featured: 'الأطباق المميزة',
                menu: 'القائمة',
                about: 'عن المطعم',
                contact: 'اتصل بنا'
            },
            en: {
                home: 'Home',
                featured: 'Featured Dishes',
                menu: 'Menu',
                about: 'About Us',
                contact: 'Contact'
            }
        };

        // Update hero section
        const heroTranslations = {
            ar: {
                title: 'استمتع بالمذاق<br>الجاوي الأصيل',
                subtitle: 'حيث يلتقي التقليد بالذوق العصري',
                viewMenu: 'شاهد القائمة',
                contactUs: 'اتصل بنا',
                features: {
                    authentic: 'مذاق أصيل',
                    fast: 'خدمة سريعة',
                    fresh: 'مكونات طازجة'
                }
            },
            en: {
                title: 'Experience Authentic<br>Indonesian Taste',
                subtitle: 'Where Tradition Meets Modern Flavor',
                viewMenu: 'View Menu',
                contactUs: 'Contact Us',
                features: {
                    authentic: 'Authentic Taste',
                    fast: 'Fast Service',
                    fresh: 'Fresh Ingredients'
                }
            }
        };

        // Update section titles
        const sectionTranslations = {
            ar: {
                featured: 'الأطباق المميزة',
                menu: 'قائمة الطعام',
                testimonials: 'آراء عملائنا'
            },
            en: {
                featured: 'Featured Dishes',
                menu: 'Our Menu',
                testimonials: 'Customer Reviews'
            }
        };

        // Update navigation
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const key = link.getAttribute('href').replace('#', '');
            link.textContent = navTranslations[currentLang][key];
        });

        // Update hero section
        const heroTitle = document.querySelector('.hero-content h1');
        const heroSubtitle = document.querySelector('.hero-content .subtitle');
        const ctaButtons = document.querySelectorAll('.cta-button');
        const features = document.querySelectorAll('.feature span');

        heroTitle.innerHTML = heroTranslations[currentLang].title;
        heroSubtitle.textContent = heroTranslations[currentLang].subtitle;
        ctaButtons[0].textContent = heroTranslations[currentLang].viewMenu;
        ctaButtons[1].textContent = heroTranslations[currentLang].contactUs;

        const featureKeys = ['authentic', 'fast', 'fresh'];
        features.forEach((feature, index) => {
            feature.textContent = heroTranslations[currentLang].features[featureKeys[index]];
        });

        // Update section titles
        document.querySelectorAll('.section-title').forEach(title => {
            const section = title.closest('section')?.id;
            if (section && sectionTranslations[currentLang][section]) {
                title.textContent = sectionTranslations[currentLang][section];
            }
        });

        // Update text direction and alignment
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
        document.body.style.textAlign = currentLang === 'ar' ? 'right' : 'left';
        document.body.classList.toggle('rtl', currentLang === 'ar');
    }

    // Generate menu categories and items
    function generateMenuItems(filter = 'all') {
        menuSection.innerHTML = ''; // Clear existing menu items
        
        Object.entries(menuData).forEach(([category, items]) => {
            // Skip categories that don't match the filter
            if (filter !== 'all') {
                const categoryLower = category.toLowerCase();
                if (filter === 'appetizers' && !categoryLower.includes('appetizers')) return;
                if (filter === 'main' && !categoryLower.includes('main course')) return;
                if (filter === 'drinks' && !categoryLower.includes('drinks')) return;
            }

            const categoryElement = document.createElement('div');
            categoryElement.className = 'category';
            categoryElement.setAttribute('data-aos', 'fade-up');
            
            const [enName, arName] = category.split(' - ');
            categoryElement.innerHTML = `
                <h3>${currentLang === 'ar' ? arName : enName}</h3>
                <div class="menu-items"></div>
            `;
            
            const menuItems = categoryElement.querySelector('.menu-items');
            
            items.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                
                const itemName = currentLang === 'ar' ? item.arabic : item.name;
                const itemDescription = currentLang === 'ar' ? item.arabicDescription : item.description;
                const currency = currentLang === 'ar' ? 'ريال' : 'SAR';
                
                menuItem.innerHTML = `
                    <div class="item-details">
                        <div class="item-name">
                            <h4>${itemName}</h4>
                            <p class="description">${itemDescription}</p>
                        </div>
                        <p class="price">${item.price} ${currency}</p>
                    </div>
                `;
                
                menuItems.appendChild(menuItem);
            });
            
            menuSection.appendChild(categoryElement);
        });
    }

    // Filter menu items
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            generateMenuItems(btn.dataset.filter);
        });
    });

    // Initialize content
    updateContent();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        if (scrollTop === 0) {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});
