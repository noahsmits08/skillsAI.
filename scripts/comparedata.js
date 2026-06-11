// Compare page configuration
// Defines which spec rows appear in the comparison table
// and any compare-specific display settings.

const compareConfig = {
    specRows: [
        { label: 'Engine / Powertrain', key: 'engine' },
        { label: 'Power',               key: 'power' },
        { label: 'Drive',               key: 'drive' },
        { label: '0–100 km/h',            key: 'acceleration' },
        { label: 'EV Range',            key: 'range' },
    ],
    maxCars: 3,
    minCars: 2
};