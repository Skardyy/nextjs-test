import fs from 'fs';
import path from 'path';

interface Props{
    missions: [{
        id: string
        cat: [{
            id: string
            types: [{
            id: string
            value: number
            }]
            locations: [{
            id: string
            items: [{
                type: string
                value: boolean
                name: string
            }]
            }]
        }]
    }]  
}

export default function handler(req: any, res: any) {
    const filePath = path.join(process.cwd(), "public", 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data: Props = JSON.parse(fileContents);
    

    if (req.query.mission) {
        const mission = data.missions.find(mission => mission.id == req.query.mission);
        res.status(200).json(mission);
    } else {
        const ids = data.missions.map(mission => mission.id);
        res.status(200).json(ids);
    }
}
