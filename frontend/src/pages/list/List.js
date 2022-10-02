import { React, usesState } from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import MainNavbar from '../../components/navbar/MainNavbar';
import Header from '../../components/header/Header';

import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = usesState(location.state.destination)
    const [dates, setDates] = usesState(location.state.dates)
    const [openDate, setOpenDate] = usesState(false)
    const [options, setOptions] = usesState(location.state.options)
    const [min, setMin] = usesState(undefined)
    const [max, setMax] = usesState(undefined)

    const mainUrl = `${process.env.REACT_APP_API_KEY}hotels?city=${destination}`
    const { data, loading, error } = useFetch(mainUrl)


    const handleClick = () => {
        console.log('refetch data');
    };

    return (
        <div>
            <MainNavbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                dates[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDates([item.selection])}
                                    minDate={new Date()}
                                    ranges={dates}
                                />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        onChange={(e) => setMin(e.target.value)}
                                        className="lsOptionInput"
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        onChange={(e) => setMax(e.target.value)}
                                        className="lsOptionInput"
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.adult}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="lsOptionInput"
                                        placeholder={options.children}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? (
                            "loading"
                        ) : (
                            <>
                                {data.map((item) => (
                                    <SearchItem item={item} key={item._id} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List