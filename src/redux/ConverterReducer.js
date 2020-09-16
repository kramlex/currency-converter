
import us from "svg-country-flags/svg/us.svg"
import ru from "svg-country-flags/svg/ru.svg"
import eu from "svg-country-flags/svg/eu.svg"
import ch from "svg-country-flags/svg/ch.svg"
import gb from "svg-country-flags/svg/gb-eng.svg"
import jp from "svg-country-flags/svg/jp.svg"
import ua from "svg-country-flags/svg/ua.svg"
import kz from "svg-country-flags/svg/kz.svg"
import by from "svg-country-flags/svg/by.svg"
import tr from "svg-country-flags/svg/tr.svg"
import cn from "svg-country-flags/svg/cn.svg"
import au from "svg-country-flags/svg/au.svg"
import ca from "svg-country-flags/svg/ca.svg"
import pl from "svg-country-flags/svg/pl.svg"






let initialState = {
    currency : [
        {name: 'RUB', icon: ru},
        {name: 'USD', icon: us},
        {name: 'EUR', icon: eu},
        {name: 'CHF', icon: ch},
        {name: 'GBR', icon: gb},
        {name: 'JPY', icon: jp},
        {name: 'UAH', icon: ua},
        {name: 'KZT', icon: kz},
        {name: 'BYT', icon: by},
        {name: 'TRY', icon: tr},
        {name: 'CNY', icon: cn},
        {name: 'AUD', icon: au},
        {name: 'CAD', icon: ca},
        {name: 'PLN', icon: pl},
    ],
}

const converterReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default converterReducer