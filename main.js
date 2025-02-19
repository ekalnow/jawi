document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 50,
    });

    // Menu data with bilingual support
    const menuData = {
        'المقبلات | Appetizers': [
            {
                nameAr: 'شوربة الخضار',
                nameEn: 'Vegetable Soup',
                descriptionAr: 'شوربة خضار طازجة على الطريقة الجاوية',
                descriptionEn: 'Fresh vegetable soup, Indonesian style',
                price: '15'
            },
            {
                nameAr: 'جادو جادو',
                nameEn: 'Gado Gado',
                descriptionAr: 'سلطة إندونيسية تقليدية مع صلصة الفول السوداني',
                descriptionEn: 'Traditional Indonesian salad with peanut sauce',
                price: '18'
            },
            {
                nameAr: 'كفتة بطاطس',
                nameEn: 'Potato Perkedel',
                descriptionAr: '6 قطع من كفتة البطاطس المقرمشة',
                descriptionEn: '6 pieces of crispy potato patties',
                price: '8'
            },
            {
                nameAr: 'بيض بالصلصة',
                nameEn: 'Eggs in Sauce',
                descriptionAr: '3 بيضات مطبوخة بالصلصة الإندونيسية',
                descriptionEn: '3 eggs cooked in Indonesian sauce',
                price: '8'
            }
        ],
        'ساتي | Satay': [
            {
                nameAr: 'ساتي دجاج',
                nameEn: 'Chicken Satay',
                descriptionAr: 'أسياخ دجاج مشوية مع صلصة الفول السوداني',
                descriptionEn: 'Grilled chicken skewers with peanut sauce',
                price: '25'
            },
            {
                nameAr: 'ساتي ربيان',
                nameEn: 'Shrimp Satay',
                descriptionAr: 'أسياخ ربيان مشوية مع صلصة الفول السوداني',
                descriptionEn: 'Grilled shrimp skewers with peanut sauce',
                price: '29'
            },
            {
                nameAr: 'ساتي مشكل',
                nameEn: 'Mixed Satay',
                descriptionAr: '3 أسياخ دجاج و 3 أسياخ ربيان مع صلصة الفول السوداني',
                descriptionEn: '3 chicken & 3 shrimp skewers with peanut sauce',
                price: '32'
            }
        ],
        'ناسي قورينق | Nasi Goreng': [
            {
                nameAr: 'ناسي قورينق خضار',
                nameEn: 'Vegetable Nasi Goreng',
                descriptionAr: 'أرز مقلي بالخضار على الطريقة الجاوية',
                descriptionEn: 'Indonesian style fried rice with vegetables',
                price: '18'
            },
            {
                nameAr: 'ناسي قورينق دجاج',
                nameEn: 'Chicken Nasi Goreng',
                descriptionAr: 'أرز مقلي بالدجاج على الطريقة الجاوية',
                descriptionEn: 'Indonesian style fried rice with chicken',
                price: '29'
            }
        ],
        'مشكلات | Mixed Plates': [
            {
                nameAr: 'مشكل خماسي',
                nameEn: 'Five Combo',
                descriptionAr: 'رز، لحم أو رندانغ دجاج، بيض وخضار عدد 2',
                descriptionEn: 'Rice, meat or chicken rendang, egg and 2 vegetables',
                price: '34'
            },
            {
                nameAr: 'مشكل جاوي سريع',
                nameEn: 'Jawi Express Combo',
                descriptionAr: 'رز، دندنغ ورندانغ لحم ودجاج كيتشاب، بيض وكفتة و4 أنواع خضار',
                descriptionEn: 'Rice, dendeng, beef rendang, chicken kecap, egg, perkedel and 4 vegetables',
                price: '44'
            }
        ],
        'صلصات | Sauces': [
            {
                nameAr: 'سامبل حار',
                nameEn: 'Hot Sambal',
                descriptionAr: 'صلصة حارة تقليدية',
                descriptionEn: 'Traditional spicy sauce',
                price: '3'
            },
            {
                nameAr: 'صلصة الفول السوداني',
                nameEn: 'Peanut Sauce',
                descriptionAr: 'صلصة الساتي التقليدية',
                descriptionEn: 'Traditional satay sauce',
                price: '3'
            }
        ],
        'مشروبات | Drinks': [
            {
                nameAr: 'شاي مثلج جاوي سريع',
                nameEn: 'Jawi Express Ice Tea',
                descriptionAr: 'شاي مثلج محلى على الطريقة الإندونيسية',
                descriptionEn: 'Sweetened iced tea, Indonesian style',
                price: '5'
            },
            {
                nameAr: 'عصير الأفوكادو',
                nameEn: 'Avocado Juice',
                descriptionAr: 'عصير أفوكادو طازج مع الشوكولاتة',
                descriptionEn: 'Fresh avocado juice with chocolate',
                price: '16'
            }
        ],
        'أطباق فردية | À la Carte': [
            {
                nameAr: 'دندن',
                nameEn: 'Dendeng',
                descriptionAr: 'شرائح لحم مجففة متبلة على الطريقة الإندونيسية',
                descriptionEn: 'Indonesian style spiced dried meat',
                price: '42'
            },
            {
                nameAr: 'رندانغ اللحم',
                nameEn: 'Beef Rendang',
                descriptionAr: 'لحم بقري مطهو ببطء مع التوابل الجاوية',
                descriptionEn: 'Slow-cooked beef in Indonesian spices',
                price: '32'
            },
            {
                nameAr: 'رندانغ الدجاج',
                nameEn: 'Chicken Rendang',
                descriptionAr: 'دجاج مطهو ببطء مع التوابل الجاوية',
                descriptionEn: 'Slow-cooked chicken in Indonesian spices',
                price: '32'
            }
        ]
    };

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Generate menu items
    function generateMenuItems() {
        const menuSection = document.querySelector('.menu-section .container');
        
        Object.entries(menuData).forEach(([category, items]) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'menu-category';
            categoryDiv.setAttribute('data-aos', 'fade-up');
            
            categoryDiv.innerHTML = `
                <h3 class="category-title">${category}</h3>
                <div class="menu-grid"></div>
            `;
            
            const menuGrid = categoryDiv.querySelector('.menu-grid');
            
            items.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <div class="item-header">
                        <div class="item-name">
                            <h4>${item.nameAr}</h4>
                            <span class="english-name">${item.nameEn}</span>
                        </div>
                        <span class="price">${item.price} ريال</span>
                    </div>
                    <p class="item-description">${item.descriptionAr}</p>
                    <p class="english-description">${item.descriptionEn}</p>
                `;
                menuGrid.appendChild(menuItem);
            });
            
            menuSection.appendChild(categoryDiv);
        });
    }

    // Initialize menu
    generateMenuItems();
});
