<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Avaliacao;
use App\Http\Requests\StoreAvaliacaoRequest;
use App\Http\Requests\UpdateAvaliacaoRequest;

class AvaliacaoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $page = $request->get('page', '1');
        $pageSize = $request->get('pageSize', '5');
        $dir = $request->get('dir', 'asc');
        $props = $request->get('props', 'id');
        $search = $request->get('search', '');


        $query = Avaliacao::select("*")
            ->whereNull("deleted_at")
            ->OrderBy($props, $dir);

        $total = $query->count();

        $data = $query->offset( ($page - 1) * $pageSize)
            ->limit($pageSize)
            ->get();

        $totalPages = ceil($total / $pageSize);


        return response()->json([
            'message'=>'Relatório de Avaliações',
            'status'=>200,
            'page'=>$page,
            'pageSize'=>$pageSize,
            'dir'=>$dir,
            'props'=>$props,
            'search'=>$search,
            'total'=>$total,
            'totalPages'=>$totalPages,
            'data'=>$data
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAvaliacaoRequest $request)
    {
        $validator = $request->validated();

        $data = Avaliacao::create($request->all());

        return response()->json([
            'message'=>'Avaliação criado com sucesso',
            'status'=>201,
            'data'=>$data
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        try {
            $data = Avaliacao::findOrFail($id);
        } catch (HttpResponseException $e) {
            return response()->json([
                'message'=>$e->getMessage(),
                'status'=>404
            ], 404);
        }
        return response()->json([
            'message'=>'Avaliação encontrado com sucesso',
            'status'=>200,
            'data'=>$data
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAvaliacaoRequest $request, string $id)
    {
        $validator = $request->validated();

        $data = Avaliacao::find($id);

        if (!$data) {
            return response()->json([
                'message'=>'Avaliação não localizado',
                'data'=>$id,
                'status'=>404
            ],404);
        }

        $data->update($request->all());

        return response()->json([
            'message'=>'Avaliação atualizado com sucesso',
            'status'=>201,
            'data'=>$data
        ],201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = Avaliacao::find($id);
        if (!$data) {
            return response()->json([
                'message'=>'Avaliação não localizada',
                'data'=>$id,
                'status'=>404
            ],404);
        }
        $data->delete();
        return response()->json([
            'message'=>'Avaliação excluída com sucesso',
            'status'=>200,
            'data'=>$data
        ], 200);
    }
}
