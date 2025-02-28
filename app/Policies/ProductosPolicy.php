<?php

namespace App\Policies;

use App\Models\Productos;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ProductosPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): Response
    {
        return $user->isAdmin() ? Response::allow() : Response::deny('No tienes permisos para registrar productos');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Productos $productos): bool
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): Response
    {
        $this->viewAny($user);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Productos $productos): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Productos $productos): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Productos $productos): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Productos $productos): bool
    {
        return false;
    }
}
