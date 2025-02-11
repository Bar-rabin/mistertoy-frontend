import { UserMsg } from './UserMsg.jsx'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../store/actions/user.actions'
import { LoginSignup } from './LoginSignup'
import { Trans, useTranslation } from 'react-i18next'




export function AppHeader() {

    const user = useSelector(storeState => storeState.userModule.loggedInUser)
    const { t, i18n } = useTranslation()

    const lngs = {
        en: { nativeName: 'English' },
        es: { nativeName: 'Spanish' },
    }

    function onLogout() {
        try {
            logout()
            showSuccessMsg('Bye Bye')
        } catch (error) {
            showErrorMsg('OOPs try again')
        }
    }






    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>Mister Toy</h1>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                    <NavLink to="/toy/dashboard">Dashboard</NavLink>
                    <NavLink to="/toy/toyShops">Our Shops</NavLink>
                </nav>
                <div>
                    <Trans i18nKey="i18"></Trans>
                    {Object.keys(lngs).map(lng => (
                        <button
                            type="submit"
                            key={lng}
                            onClick={() => i18n.changeLanguage(lng)}
                            disabled={i18n.resolvedLanguage === lng}
                        >
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </div>
                <div className="logo-login-container flex justify-between align-center">
                    {user ? (
                        <section>
                            <Link to={'/user'}>Hello {user.fullname}</Link>
                            <button onClick={onLogout}>Logout</button>
                        </section>
                    ) : (
                        <section>
                            <LoginSignup />
                        </section>
                    )}
                </div>
            </section>

            {/* <UserMsg /> */}
        </header>
    )
}
