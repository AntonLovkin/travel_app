 const sortByStartDate = (trips) => {
    return trips.slice().sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateA - dateB;
    });
};

export default sortByStartDate;