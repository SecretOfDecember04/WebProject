import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
    const client = await clientPromise;
    const db = client.db(); // default to the admin database if none specified in URI
    const posts = await db.collection('posts').find({}).toArray();
    return NextResponse.json(posts);
}

export async function POST(request) {
    const client = await clientPromise;
    const db = client.db(); // default to the admin database if none specified in URI
    const newPost = await request.json();
    const result = await db.collection('posts').insertOne(newPost);
    return NextResponse.json(result.ops[0], { status: 201 });
}

export async function PUT(request) {
    const client = await clientPromise;
    const db = client.db(); // default to the admin database if none specified in URI
    const updatedPost = await request.json();
    const { _id, ...updateData } = updatedPost;
    await db.collection('posts').updateOne({ _id: new ObjectId(_id) }, { $set: updateData });
    return NextResponse.json({ message: 'Post updated' });
}

export async function DELETE(request) {
    const client = await clientPromise;
    const db = client.db(); // default to the admin database if none specified in URI
    const { id } = request.query;
    await db.collection('posts').deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ message: 'Post deleted' });
}
