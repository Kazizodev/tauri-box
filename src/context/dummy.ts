export const dummyData = {
    DevTime: Date.now(), // Example device time
    HardVer: 12345, // Example hardware version
    FWVer: 54321, // Example firmware version
    BatRead: 80, // Example battery reading
    ErrorCode: 0, // Example error code
    RSSI: 100, // Example RSSI
    RSSP: -80, // Example RSSP
    RSSQ: -19.5, // Example RSSQ
    SDFileCNT: 10, // Example SD file count
    SDOFFCNT: 5, // Example SD off count
    SDONCNT: 5, // Example SD on count
    PSGCNT: 3, // Example PSG count
    PSGFreq: 60, // Example PSG frequency
    PSGTime: Date.now(), // Example PSG time
    PowerMode: 1, // Example power mode
    PowerON: 1, // Example power ON
    PowerOFF: 2, // Example power OFF
    CellMode: 1, // Example cell mode
    CellON: 1, // Example cell ON
    CellOFF: 2, // Example cell OFF
    GPSMode: 1, // Example GPS mode
    GPSON: 1, // Example GPS ON
    GPSOFF: 0, // Example GPS OFF
    RecMode: 1, // Example record mode
    BLEAdvMode: 1, // Example BLE advertisement mode
    CoilGain: 0, // Example coil gain
    GEOGain: 1, // Example GEO gain
    DetMode: 2, // Example detection mode
    MAGDet: 1, // Example MAG detection
    ELFDet: 0, // Example ELF detection
    GEODet: 1, // Example GEO detection
    DetFreq: 5, // Example detection frequency
    StreamMode: 2, // Example stream mode
    ExtGeo: 1, // Example external GEO
    ExtCoil: 0, // Example external coil
    ExtPWR: 1, // Example external power
    ELFPWRThresh: 150, // Example ELF power threshold
    ELFSNRThresh: 100, // Example ELF SNR threshold
    ELFPeakWidth: 50, // Example ELF peak width
    ELFPulseWidth: 20, // Example ELF pulse width
    GEOPwrThresh: 120, // Example GEO power threshold
    GEOPulseWidth: 30, // Example GEO pulse width
    MAGPwrThresh: 110, // Example MAG power threshold
    MAGPulseWidth: 40, // Example MAG pulse width
    MAGAnalyzePeriod: 60, // Example MAG analyze period
    ELFAnalyzePeriod: 120, // Example ELF analyze period
    GEOAnalyzePeriod: 180, // Example GEO analyze period
}

export const GPSInfo = [
    {
        // ? Alt
        value: 97,
        size: 2,
    },
    {
        // ? SatCnt
        value: 9,
        size: 1,
    },
    {
        // ? Hdilution
        value: 90,
        size: 2,
    },
]

export const DiagnosticInfo = [
    {
        //? Device Time
        value: [10, 0, 8, 47],
        size: 4,
    },
    {
        // ? Hardware Version
        value: '0.0.1',
        size: 3,
    },
    {
        // ? Firmware Version
        value: '0.0.1',
        size: 3,
    },
    {
        // ? Battery
        value: 6364,
        size: 2,
    },
    {
        // ? Error Code
        value: 0,
        size: 2,
    },
    {
        // ? RSSI
        value: 0,
        size: 1,
    },
    {
        // ? RSSP
        value: 0,
        size: 1,
    },
    {
        // ? RSSQ
        value: 0,
        size: 1,
    },
    {
        // ? SD File Count
        value: 12,
        size: 2,
    },
    {
        // ? SD Off Count
        value: 0,
        size: 2,
    },
    {
        // ? SD On Count
        value: 0,
        size: 2,
    },
    {
        // ? PSG Count
        value: 61,
        size: 1,
    },
    {
        // ? PSG Frequency
        value: 0,
        size: 1,
    },
    {
        // ? PSG Time
        value: new Date(),
        size: 8,
    },
]
