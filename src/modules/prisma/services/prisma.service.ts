import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../../../../prisma/generated";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	async onModuleInit(): Promise<any> {
		await this.$connect();
	}

	async onModuleDestroy(): Promise<any> {
		await this.$disconnect();
	}
}