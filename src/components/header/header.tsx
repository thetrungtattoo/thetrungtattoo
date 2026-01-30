import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/config/path';
import { useState, useRef, useCallback, useMemo, memo, useEffect } from 'react';
import logo from '@/assets/svg/logo.svg';
import bookingIcon from '@/assets/images/booking/booking.png';
import { ArrowDownIcon, BellIcon, Symbol } from '@/assets/svg/svg';
import { DROPDOWN_CONFIG, DROPDOWN_DELAY } from './config';
import type { DropdownColumn } from './config';
import styles from './styles.module.scss';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = useCallback((dropdown: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setActiveDropdown(dropdown);
    }, []);

    const handleMouseLeave = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, DROPDOWN_DELAY);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
            setIsMobileMenuOpen(false);
        }
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.classList.add('mobileMenuOpen');
        } else {
            document.body.classList.remove('mobileMenuOpen');
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove('mobileMenuOpen');
        };
    }, [isMobileMenuOpen, handleClickOutside]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 840 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        setActiveDropdown(null);
    }, [location.pathname]);

    const handleScrollNavigation = useCallback((path: string, e: React.MouseEvent) => {
        if (path.startsWith('/#')) {
            e.preventDefault();
            const sectionId = path.replace('/#', '');
            if (location.pathname === '/') {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                navigate('/', { state: { scrollToSection: sectionId, skipLoading: true } });
            }
        }
    }, [location.pathname, navigate]);

    const navigationItems = useMemo(() => [
        { label: 'Trang chủ', path: ROUTE_PATHS.ROOT, hasDropdown: false, dropdownKey: '' },
        { label: 'Sản phẩm', path: ROUTE_PATHS.PRODUCTS, hasDropdown: false, dropdownKey: 'collections' },
        { label: 'Dịch vụ', path: ROUTE_PATHS.SERVICES, hasDropdown: true, dropdownKey: 'services' },
        { label: 'Bảng giá', path: ROUTE_PATHS.BUSINESS.PRICING, hasDropdown: false, dropdownKey: '' },
        { label: 'Đặt lịch', path: ROUTE_PATHS.BUSINESS.APPOINTMENT, hasDropdown: false, isBooking: true },
        { label: 'Blog', hasDropdown: true, dropdownKey: 'blog' },
        { label: 'Về chúng tôi', path: ROUTE_PATHS.ABOUT, hasDropdown: false, dropdownKey: '' },
    ], []);

    const isItemActive = useCallback((item: typeof navigationItems[0]) => {
        const pathname = location.pathname;
        if (item.path && pathname === item.path) {
            return true;
        }
        if (item.hasDropdown && item.dropdownKey && DROPDOWN_CONFIG[item.dropdownKey]) {
            return DROPDOWN_CONFIG[item.dropdownKey].some(column =>
                column.items.some(dropdownItem => dropdownItem.path === pathname)
            );
        }
        return false;
    }, [location.pathname]);

    const DropdownColumnComponent = memo(({ column }: { column: DropdownColumn }) => (
        <div className={styles.dropdownColumn}>
            {column.title && <h4 className={styles.dropdownTitle}>{column.title}</h4>}
            <ul className={styles.dropdownList}>
                {column.items.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path.startsWith('/#') ? '/' : item.path}
                            onClick={(e) => handleScrollNavigation(item.path, e)}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    ));

    const MobileMenu = memo(({
        isItemActive,
        isMobileMenuOpen,
        closeMobileMenu,
        onScrollNav
    }: {
        isItemActive: (item: typeof navigationItems[0]) => boolean;
        isMobileMenuOpen: boolean;
        closeMobileMenu: () => void;
        onScrollNav: (path: string, e: React.MouseEvent) => void;
    }) => {
        const handleMobileNavClick = (path: string, e: React.MouseEvent) => {
            onScrollNav(path, e);
            closeMobileMenu();
        };

        return (
            <>
                <div
                    className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.mobileOverlayOpen : ''}`}
                    onClick={closeMobileMenu}
                />
                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <div className={styles.mobileMenuContent}>
                        {navigationItems.map((item, index) => {
                            const active = isItemActive(item);
                            return (
                                <div key={index} className={styles.mobileMenuItem}>
                                    <Link
                                        to={item.path || '#'}
                                        className={`${styles.mobileMenuLink} ${active ? styles.active : ''}`}
                                        onClick={closeMobileMenu}
                                    >
                                        {item.label}
                                        {item.isBooking && <img src={bookingIcon} alt="booking" className={styles.mobileBookingIcon} />}
                                    </Link>
                                    {item.hasDropdown && DROPDOWN_CONFIG[item.dropdownKey!] && (
                                        <div className={styles.mobileDropdown}>
                                            {DROPDOWN_CONFIG[item.dropdownKey!].map((column, colIndex) => (
                                                <div key={colIndex} className={styles.mobileDropdownColumn}>
                                                    {column.title && <h4 className={styles.mobileDropdownTitle}>{column.title}</h4>}
                                                    <ul className={styles.mobileDropdownList}>
                                                        {column.items.map((dropdownItem, itemIndex) => (
                                                            <li key={itemIndex}>
                                                                <Link
                                                                    to={dropdownItem.path.startsWith('/#') ? '/' : dropdownItem.path}
                                                                    className={styles.mobileDropdownLink}
                                                                    onClick={(e) => handleMobileNavClick(dropdownItem.path, e)}
                                                                >
                                                                    {dropdownItem.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    });

    const NavigationItem = memo(({ item }: { item: typeof navigationItems[0] }) => {
        const active = isItemActive(item);

        if (!item.hasDropdown) {
            return (
                <Link to={item.path || '#'} className={`${styles.navLink} ${active ? styles.active : ''}`}>
                    {item.label}
                    {item.isBooking && <img src={bookingIcon} alt="booking" className={styles.bookingIcon} />}
                </Link>
            );
        }

        return (
            <div
                className={styles.navItem}
                onMouseEnter={() => handleMouseEnter(item.dropdownKey!)}
                onMouseLeave={handleMouseLeave}
            >
                <Link
                    to={item.path || '#'}
                    className={`${styles.navLink} ${active ? styles.active : ''}`}
                >
                    {item.label}
                    <ArrowDownIcon />
                </Link>
                {activeDropdown === item.dropdownKey && (
                    <div className={`${styles.dropdown} ${item.dropdownKey === 'blog' ? styles.blogDropdown : ''}`}>
                        {DROPDOWN_CONFIG[item.dropdownKey!]?.map((column, index) => (
                            <DropdownColumnComponent key={index} column={column} />
                        ))}
                    </div>
                )}
            </div>
        );
    });

    return (
        <div className={styles.headerContainer} ref={headerRef}>
            <div className={styles.headerLogo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.headerNav}>
                <nav className={styles.headerNavList}>
                    {navigationItems.map((item, index) => (
                        <NavigationItem key={index} item={item} />
                    ))}
                    <div className={styles.headerNavButton}>
                        <BellIcon />
                    </div>
                </nav>
            </div>

            <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
                <Symbol />
            </div>

            <MobileMenu
                isItemActive={isItemActive}
                isMobileMenuOpen={isMobileMenuOpen}
                closeMobileMenu={closeMobileMenu}
                onScrollNav={handleScrollNavigation}
            />
        </div>
    );
}

export default memo(Header);
