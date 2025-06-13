import { prisma } from "../prisma/client";

class DevService {
    public async register({ name, bio, techs, github_url, avatar_url }: { name: string, bio: string, techs: string[], github_url: string, avatar_url: string }) {
        const novoDev = {
            id: crypto.randomUUID(),
            name: name,
            bio: bio,
            techs: techs,
            github_url: github_url,
            avatar_url: avatar_url,
            created_at: new Date(),
            updated_at: new Date()
        }
        const createDev = await prisma.cadastroDev.create({
            data: novoDev
        })
        return createDev

    }

    public async getAll() {
        const devs = await prisma.cadastroDev.findMany()

        return devs
    }

    public async getById(id: string) {
        const dev = await prisma.cadastroDev.findUnique({ where: { id }})

        if (!dev){
            throw new Error("Dev não encontrado!!!")
        }
        return dev
    }

    public async deleteById( id: string ) {
        return await prisma.cadastroDev.delete({ where: { id: id } })
    }
}

export const devService = new DevService();