import Dexie, { type EntityTable } from 'dexie';


interface Note {
    id: number;
    name: string;
    bodyText: string;
}


const db = new Dexie('NoteDataBase') as Dexie & {
    note: EntityTable<Note, 'id'>
};


db.version(1).stores({
    note: "++id, name, bodyText" // Таблица заметок
});

export type { Note };
export { db };