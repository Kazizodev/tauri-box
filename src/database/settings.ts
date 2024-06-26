import { Settings } from '@/types/types'
import Database from 'tauri-plugin-sql-api'

type SettingsProps = { id?: number; ip: string; port: number }
type LatLongProps = { id?: number; lat: number; long: number; coilFreq: number; geoFreq: number; duration: number }

async function doesTableExist(db: any): Promise<boolean> {
    const result = await db.select(`SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name=?`, ['Settings'])
    return result?.[0]?.count > 0
}
async function createTable(db: any) {
    await db.execute(
        `CREATE TABLE Settings (
            id INTEGER PRIMARY KEY autoincrement, 
            ip VARCHAR(255) NOT NULL,
            port INTEGER DEFAULT 0,
            lat REAL DEFAULT 0.00,
            long REAL DEFAULT 0.00,
            coilFreq REAL DEFAULT 0.00,
            geoFreq REAL DEFAULT 0.00,
            duration INTEGER DEFAULT 0
        )`
    )
}
async function insertDefaultValues(db: any) {
    await db.execute(
        `INSERT INTO Settings (ip, lat, long, port, coilFreq, geoFreq, duration)
        VALUES ('127.0.0.1', 47.6062, 122.3321, 8284, 22.0, 100.0, 200)`
    )
}

export default async function useSettings() {
    const db = await Database.load('sqlite:test.db')

    if (!(await doesTableExist(db))) {
        await createTable(db)
        await insertDefaultValues(db)
    }

    return db
}

// ? GET
export const getSettings = async () => {
    try {
        const db = await useSettings()

        const data = (await db.select('SELECT * FROM Settings')) as Settings[]

        return { success: true, data }
    } catch (error) {
        return { success: false, error }
    }
}

// ? POST
export const createEditSettings = async (data: SettingsProps) => {
    try {
        const db = await useSettings()

        if (data.id) await db.execute(`UPDATE Settings SET ip = $1, port = $2 WHERE id = $3`, [data.ip, data.port, data.id])
        else await db.execute(`INSERT INTO Settings (ip, port) VALUES ($1, $2)`, [data.ip, data.port])

        // ? get settings
        const settings = (await db.select('SELECT * FROM Settings')) as Settings[]

        return { success: true, data: settings[0] }
    } catch (error) {
        return { success: false, error }
    }
}
export const createEditLatLong = async (data: LatLongProps) => {
    try {
        const db = await useSettings()

        await db.execute(`UPDATE Settings SET lat = $1, long = $2, coilFreq = $3, geoFreq = $4, duration = $5 WHERE id = $6`, [
            data.lat,
            data.long,
            data.coilFreq,
            data.geoFreq,
            data.duration,
            data.id,
        ])

        // ? get settings
        const settings = (await db.select('SELECT * FROM Settings')) as Settings[]

        return { success: true, data: settings[0] }
    } catch (error) {
        return { success: false, error }
    }
}
