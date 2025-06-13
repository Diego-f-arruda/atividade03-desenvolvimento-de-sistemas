import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { devService } from "../Services/DevService";

export async function DevController(app: FastifyInstance) {
  app.post("/dev", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = request.body as {
        name: string,
        bio: string,
        techs: string[],
        github_url: string,
        avatar_url: string
      }
      await devService.register(body)
      return reply.code(201).send();

    } catch (error: any) {
      return reply.status(409).send({ erro: error.message })
    }
  }
  );

  app.get("/dev", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const devs = await devService.getAll()
      return reply.code(200).send(devs);
    } catch (error: any) {
      return reply.code(400).send({ erro: error.message })
    }
  }
  );

  app.get("/dev/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { id } = request.params as { id: string };
      const devEncontrado = await devService.getById(id)
      return reply.code(200).send(devEncontrado);
    } catch (error: any) {
      return reply.status(404).send({ error: "Not Found" })
    }
  }
  );

  app.delete("/dev/:id", async (request: FastifyRequest, reply: FastifyReply) => {

    const { id } = request.params as { id: string };
    await devService.deleteById(id)
    return reply.code(200).send();
  });
}
