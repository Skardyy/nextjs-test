// @ts-nocheck

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), "public", 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    if (req.query.mission) {
        const mission = data.missions.find(mission => mission.id == req.query.mission);
        res.status(200).json(mission);
    } else {
        const ids = data.missions.map(mission => mission.id);
        res.status(200).json(ids);
    }
}
